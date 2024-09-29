package com.sabbir.application.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ApplicationDto {
    private Long id;
    private String studentName; // The name of the student who applied
    private String fileUrl;
}
