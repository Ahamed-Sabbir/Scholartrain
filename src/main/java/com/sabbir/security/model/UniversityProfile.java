package com.sabbir.security.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "university_profile_table")
public class UniversityProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "university_profile_id")
    private int id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_of_user")
    private User user;

    @Column(name = "email")
    private String email;

    @Column(name = "address")
    private String address;

}
