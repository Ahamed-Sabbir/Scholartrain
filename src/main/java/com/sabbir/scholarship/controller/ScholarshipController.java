package com.sabbir.scholarship.controller;

import com.sabbir.scholarship.model.Scholarship;
import com.sabbir.scholarship.service.ScholarshipService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/scholarship")
public class ScholarshipController {
    private final ScholarshipService scholarshipService;
    public ScholarshipController(ScholarshipService scholarshipService) {
        this.scholarshipService = scholarshipService;
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
}
