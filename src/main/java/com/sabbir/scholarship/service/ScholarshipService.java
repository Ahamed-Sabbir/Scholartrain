package com.sabbir.scholarship.service;

import com.sabbir.application.dto.ApplicationDto;
import com.sabbir.application.model.Application;
import com.sabbir.application.repository.ApplicationRepository;
import com.sabbir.scholarship.dto.ScholarshipDto;
import com.sabbir.scholarship.dto.ScholarshipDtoStudents;
import com.sabbir.scholarship.dto.ScholarshipDtoUniversity;
import com.sabbir.scholarship.model.Scholarship;
import com.sabbir.scholarship.model.Tag;
import com.sabbir.scholarship.repository.ScholarshipRepository;

import com.sabbir.security.model.User;
import com.sabbir.security.repository.UserRepo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ScholarshipService {
    private final ScholarshipRepository scholarshipRepository;
    private final UserRepo userRepo;
    private final ApplicationRepository applicationRepository;
    public ScholarshipService(
            ScholarshipRepository scholarshipRepository,
            UserRepo userRepo,
            ApplicationRepository applicationRepository
    ) {
        this.scholarshipRepository = scholarshipRepository;
        this.userRepo = userRepo;
        this.applicationRepository = applicationRepository;
    }

    @Transactional
    public Page<Scholarship> getPaginatedScholarships(Pageable pageable) {
        return scholarshipRepository.findAll(pageable);
    }

//    @Transactional
//    public Scholarship getScholarshipById(Long id) {
//        return scholarshipRepository.findById(id).orElse(null);
//    }
    @Transactional
    public ScholarshipDtoStudents getScholarshipById(Long scholarshipId, Long userId) {
        Scholarship scholarship = scholarshipRepository.findById(scholarshipId).orElse(null);

        User user;
        try{
            user = userRepo.findById(userId);
        }
        catch (Exception e){
            throw new RuntimeException("User not found");
        }
        ScholarshipDtoStudents dto = new ScholarshipDtoStudents();
        dto.setId(scholarship.getId());
        dto.setTitle(scholarship.getTitle());
        dto.setDeadline(scholarship.getDeadline());
        dto.setEligibility(scholarship.getEligibility());
        dto.setDescription(scholarship.getDescription());
        dto.setTags(scholarship.getTags().stream().map(Tag::getTag).collect(Collectors.toList()));
        dto.setImageUrl(scholarship.getImageUrl());
        dto.setLink(scholarship.getLink());

        // Check if the user has applied to this scholarship
        boolean isApplied = user.getAppliedScholarships().contains(scholarship);
        dto.setIsApplied(isApplied);

        return dto;

    }

    @Transactional
    public Page<ScholarshipDtoStudents> getPaginatedScholarships(Pageable pageable, Long userId) {
        Page<Scholarship> scholarships = scholarshipRepository.findAll(pageable);

        User user;
        try{
            user = userRepo.findById(userId);
        }
        catch (Exception e){
            throw new RuntimeException("User not found");
        }
        return scholarships.map(scholarship -> {
            ScholarshipDtoStudents dto = new ScholarshipDtoStudents();
            dto.setId(scholarship.getId());
            dto.setTitle(scholarship.getTitle());
            dto.setDeadline(scholarship.getDeadline());
            dto.setEligibility(scholarship.getEligibility());
            dto.setDescription(scholarship.getDescription());
            dto.setTags(scholarship.getTags().stream().map(Tag::getTag).collect(Collectors.toList()));
            dto.setImageUrl(scholarship.getImageUrl());
            dto.setLink(scholarship.getLink());

            // Check if the user has applied to this scholarship
            boolean isApplied = user.getAppliedScholarships().contains(scholarship);
            dto.setIsApplied(isApplied);
            return dto;
        });
    }


    public Scholarship createScholarship (Scholarship scholarship) {
        return scholarshipRepository.save(scholarship);
    }
    public void applyForScholarship(Long scholarshipId, Long studentId, String filePath) {
        Scholarship scholarship = scholarshipRepository.findById(scholarshipId).orElseThrow(() -> new RuntimeException("Scholarship not found"));
        User student;
        try {
            student = userRepo.findById(studentId);
        } catch (Exception e) {
            throw new RuntimeException("Student not found");
        }

        Application application = new Application();
        application.setScholarship(scholarship);
        application.setStudent(student);
        application.setFileUrl(filePath);

        applicationRepository.save(application);
    }

    public List<ApplicationDto> getApplicationsForScholarship(Long scholarshipId) {
        Scholarship scholarship = scholarshipRepository.findById(scholarshipId).orElseThrow(() -> new RuntimeException("Scholarship not found"));
        return scholarship.getApplications().stream()
                .map(app -> new ApplicationDto(app.getId(), app.getStudent().getProfileName(), app.getFileUrl()))
                .collect(Collectors.toList());
    }

    public Scholarship findById(Long id) {
        return scholarshipRepository.findById(id).orElse(null);
    }

    public List<Scholarship> findAll() {
        return scholarshipRepository.findAll();
    }
//     public List<Scholarship> findByCreator(User creator) {
//        return scholarshipRepository.findByCreator(creator);
//     }
    @Transactional
    public List<ScholarshipDtoUniversity> findByCreator(User creator) {
        List<Scholarship> scholarships = scholarshipRepository.findByCreator(creator);
        return scholarships.stream().map(scholarship -> {
            ScholarshipDtoUniversity dto = new ScholarshipDtoUniversity();
            dto.setId(scholarship.getId());
            dto.setTitle(scholarship.getTitle());
            dto.setDeadline(scholarship.getDeadline());
            dto.setEligibility(scholarship.getEligibility());
            dto.setDescription(scholarship.getDescription());
            dto.setTags(scholarship.getTags().stream().map(Tag::getTag).collect(Collectors.toList()));
            dto.setImageUrl(scholarship.getImageUrl());
            dto.setLink(scholarship.getLink());
            dto.setTotalApplied((long) scholarship.getAppliedStudents().size());
            return dto;
        }).collect(Collectors.toList());
    }
}
