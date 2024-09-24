package com.sabbir.scholarship.repository;

import com.sabbir.scholarship.model.Scholarship;
import com.sabbir.security.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ScholarshipRepository extends JpaRepository<Scholarship, Long> {
    Scholarship findById(long id);
    List<Scholarship> findByCreator(User creator);

}
