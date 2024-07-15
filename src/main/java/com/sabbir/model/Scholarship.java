package com.sabbir.model;

import lombok.*;

import java.util.List;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Scholarship {
    private Integer scholarshipId;
    private String scholarshipName;
    private Integer universityId;
    private String scholarshipAbstract;
    private byte[] scholarshipImage; // file
    private List<Subjects> whoCanApply;
    private String scholarshipDetails;
}
