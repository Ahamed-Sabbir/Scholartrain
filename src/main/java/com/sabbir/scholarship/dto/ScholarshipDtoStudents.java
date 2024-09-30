package com.sabbir.scholarship.dto;

import lombok.*;

import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class ScholarshipDtoStudents extends ScholarshipDto {
    private boolean isApplied;
    public boolean getIsApplied() {
        return isApplied;
    }
    public void setIsApplied(boolean isApplied) {
        this.isApplied = isApplied;
    }
}
