package com.sabbir.model;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class Student {
    private String name;
    private String email;
    private String password;
    private Integer age;
    private String DateOfBirth;
}
