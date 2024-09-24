package com.sabbir.scholarship.service;

import com.sabbir.scholarship.model.Scholarship;
import com.sabbir.scholarship.repository.ScholarshipRepository;

import com.sabbir.security.model.User;
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

    @Transactional
    public Scholarship getScholarshipById(Long id) {
        return scholarshipRepository.findById(id).orElse(null);
    }

    public Scholarship createScholarship (Scholarship scholarship) {
        return scholarshipRepository.save(scholarship);
    }

    public Scholarship findById(Long id) {
        return scholarshipRepository.findById(id).orElse(null);
    }

    public List<Scholarship> findAll() {
        return scholarshipRepository.findAll();
    }
     public List<Scholarship> findByCreator(User creator) {
        return scholarshipRepository.findByCreator(creator);
     }
}
