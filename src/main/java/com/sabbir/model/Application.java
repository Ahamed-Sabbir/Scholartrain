package com.sabbir.model;


import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Application {
    private Integer applicationId;
    private Integer studentId;
    private Integer scholarshipId;
    private Integer postId;
    private byte[] studentCv; // use Lob annotation
    // some checking will happen based on the form fill up at the time of submitting application
    // complete at the time of designing and developing
}
