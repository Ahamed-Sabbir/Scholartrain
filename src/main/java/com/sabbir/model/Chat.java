package com.sabbir.model;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class Chat {
    private Integer chatId;
    private Integer universityID;
    private Integer studentID;
}
