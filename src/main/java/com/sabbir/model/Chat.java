package com.sabbir.model;

import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class Chat {
    private Integer ChatId;
    private Integer UniversityID;
    private Integer StudentID;
}
