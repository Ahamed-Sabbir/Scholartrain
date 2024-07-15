package com.sabbir.model;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class Student {
    private String studentUniversityName;
    private String studentId;
    private String studentName;
    private String studentEmail;
    private String studentPassword;
    private String studentDateOfBirth;
    private String studentSubject;
    private String studentCgpa;
    private String studentAddress;
    private byte[] studentPicture;
    private String studentGender;
    private String studentFathersName;
    private String studentMothersName;
}
