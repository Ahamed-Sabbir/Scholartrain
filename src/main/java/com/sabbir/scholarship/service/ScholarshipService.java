package com.sabbir.scholarship.service;

import com.sabbir.scholarship.model.Scholarship;
import com.sabbir.scholarship.repository.ScholarshipRepository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ScholarshipService {
    private final ScholarshipRepository scholarshipRepository;
    public ScholarshipService(ScholarshipRepository scholarshipRepository) {
        this.scholarshipRepository = scholarshipRepository;
    }

    @Transactional
    public Page<Scholarship> getPaginatedScholarships(Pageable pageable) {
        return scholarshipRepository.findAll(pageable);
    }
}
