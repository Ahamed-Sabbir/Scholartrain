package com.sabbir.scholarship.controller;

import com.sabbir.scholarship.model.Scholarship;
import com.sabbir.scholarship.service.ScholarshipService;
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
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/scholarship")
public class ScholarshipController {
    private final ScholarshipService scholarshipService;
    private final UserService userService;
    public ScholarshipController(ScholarshipService scholarshipService, UserService userService) {
        this.scholarshipService = scholarshipService;
        this.userService = userService;
    }

    @GetMapping("/all")
    public Page<Scholarship> getAllScholarships(@RequestParam(defaultValue = "0") int page,
                                                @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        return scholarshipService.getPaginatedScholarships(pageable);
    }

    @GetMapping("/{id}")
    public Scholarship getScholarshipById(@PathVariable("id") Long id) {
        return scholarshipService.getScholarshipById(id);
    }

    // Create scholarship (for ROLE_UNIVERSITY)
    @PostMapping("/create")
//    @PreAuthorize("hasRole('ROLE_UNIVERSITY')")
    public ResponseEntity<String> createScholarship(@RequestBody Scholarship scholarship) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User university = userService.findUserByUsername(username);

        scholarship.setCreator(university); // Set the creator of the scholarship
        scholarshipService.createScholarship(scholarship);

        return ResponseEntity.ok("Scholarship created successfully.");
    }

    // Apply for a scholarship (for ROLE_STUDENT)
    @PostMapping("/apply/{scholarshipId}")
    public ResponseEntity<?> applyForScholarship(
            @PathVariable Long scholarshipId) {

        // Get the student user
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User student = userService.findUserByUsername(username);

        // Find the scholarship by ID
        Scholarship scholarship = scholarshipService.findById(scholarshipId);

        // Add the scholarship to the student's applied scholarships
        student.getAppliedScholarships().add(scholarship);
        userService.saveStudent(student);

        return new ResponseEntity<>(HttpStatus.CREATED);
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
    @GetMapping("/my-scholarships")
//    @PreAuthorize("hasRole('ROLE_UNIVERSITY')")
    public ResponseEntity<List<Scholarship>> getMyScholarships() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User university = userService.findUserByUsername(username);

        List<Scholarship> myScholarships = scholarshipService.findByCreator(university);

        if(myScholarships.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(myScholarships);
    }
}
