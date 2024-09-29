package com.sabbir.scholarship.controller;

import com.sabbir.application.dto.ApplicationDto;
import com.sabbir.scholarship.dto.ScholarshipDto;
import com.sabbir.scholarship.dto.ScholarshipDtoStudents;
import com.sabbir.scholarship.dto.ScholarshipDtoUniversity;
import com.sabbir.scholarship.model.Scholarship;
import com.sabbir.scholarship.model.Tag;
import com.sabbir.scholarship.service.ScholarshipService;
import com.sabbir.scholarship.service.TagService;
import com.sabbir.security.model.User;
import com.sabbir.security.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/scholarship")
public class ScholarshipController {
    private final ScholarshipService scholarshipService;
    private final UserService userService;
    private final TagService tagService;
    public ScholarshipController(
            ScholarshipService scholarshipService,
            UserService userService,
            TagService tagService
    ) {
        this.scholarshipService = scholarshipService;
        this.userService = userService;
        this.tagService = tagService;
    }

    @GetMapping("/all")
    public Page<ScholarshipDtoStudents>  getAllScholarships(@RequestParam(defaultValue = "0") int page,
                                                            @RequestParam(defaultValue = "10") int size) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User student = userService.findUserByUsername(username);

        Pageable pageable = PageRequest.of(page, size);
//        return scholarshipService.getPaginatedScholarships(pageable);
        return scholarshipService.getPaginatedScholarships(pageable,student.getId());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ScholarshipDto>  getScholarshipById(@PathVariable("id") Long id) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User student = userService.findUserByUsername(username);

        ScholarshipDtoStudents scholarshipDtoStudents = scholarshipService.getScholarshipById(id, student.getId());
        return ResponseEntity.ok(scholarshipDtoStudents);
    }

    @GetMapping("/tags")
    public ResponseEntity<List<Tag>>  getScholarshipTags() {
        List<Tag> tags = tagService.getAllTags();

        return ResponseEntity.ok(tags);
    }

    // Create scholarship (for ROLE_UNIVERSITY)
    @PostMapping("/create")
//    @PreAuthorize("hasRole('ROLE_UNIVERSITY')")
    public ResponseEntity<?> createScholarship(@RequestBody Scholarship scholarship) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User university = userService.findUserByUsername(username);

        scholarship.setCreator(university); // Set the creator of the scholarship

        scholarshipService.createScholarship(scholarship);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    // Apply for a scholarship (for ROLE_STUDENT)
    @PostMapping("/apply/{scholarshipId}")
    public ResponseEntity<?> applyForScholarship(
            @PathVariable Long scholarshipId, @RequestParam("file") MultipartFile file) throws IOException {

        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        // Save file
        String filePath = System.getProperty("user.home") + "/Downloads/uploads/" + fileName;
        Files.copy(file.getInputStream(), Paths.get(filePath), StandardCopyOption.REPLACE_EXISTING);

        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User student = userService.findUserByUsername(username);

        // Find the scholarship by ID
        Scholarship scholarship = scholarshipService.findById(scholarshipId);

        // Add the scholarship to the student's applied scholarships
        student.getAppliedScholarships().add(scholarship);
        userService.saveStudent(student);
        // Create an application record

        scholarshipService.applyForScholarship(scholarshipId, student.getId(), filePath);

        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/{scholarshipId}/applications")
    public ResponseEntity<List<ApplicationDto>> getScholarshipApplications(@PathVariable Long scholarshipId) {
        List<ApplicationDto> applications = scholarshipService.getApplicationsForScholarship(scholarshipId);
        return ResponseEntity.ok(applications);
    }


    // Get all scholarships that the student applied for (for ROLE_STUDENT)
    @GetMapping("/applied")
//    @PreAuthorize("hasRole('ROLE_STUDENT')")
    public ResponseEntity<List<Scholarship>> getAppliedScholarships() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User student = userService.findUserByUsername(username);
        List<Scholarship> appliedScholarships = student.getAppliedScholarships();
        return ResponseEntity.ok(appliedScholarships);
    }

    // Get all scholarships created by the university (for ROLE_UNIVERSITY)
    @GetMapping("/created")
//    @PreAuthorize("hasRole('ROLE_UNIVERSITY')")
    public ResponseEntity<List<ScholarshipDtoUniversity>> getMyScholarships() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User university = userService.findUserByUsername(username);

        List<ScholarshipDtoUniversity> scholarshipDtoUniversities = scholarshipService.findByCreator(university);

        if(scholarshipDtoUniversities.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(scholarshipDtoUniversities);
    }
}
