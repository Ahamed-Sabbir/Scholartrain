package com.sabbir.scholarship.dto;

import lombok.*;

import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class ScholarshipDtoUniversity extends ScholarshipDto {
    private Long totalApplied;
}
