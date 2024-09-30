package com.sabbir.scholarship.dto;

import lombok.*;

import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class ScholarshipDto {
    private Long id;
    private String title;
    private Date deadline;
    private String eligibility;
    private String description;
    private List<String> tags;
    private String imageUrl;
    private String link;

}
