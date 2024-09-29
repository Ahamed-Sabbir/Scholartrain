package com.sabbir.application.model;

import com.sabbir.scholarship.model.Scholarship;
import com.sabbir.security.model.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User student;

    @ManyToOne
    private Scholarship scholarship;

    private String fileUrl; // URL for the uploaded file

    // Getters and Setters
}
