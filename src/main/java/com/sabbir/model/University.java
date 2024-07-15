package com.sabbir.model;

import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class University {
    private Integer universityId;
    private String universityName;
    private String universityEmail;
    private String universityPassword;
    private String universityType; // public, private, semi-public
    private String universityLocation;
    private List<Subjects> universitySubjectList;
    private List<Accreditations> universityAccreditations;
}
