package com.example.practice2.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DoctorResponse {

    private Long id;
    private String name;
    private String speciality;
    private String mode;
    private String availability;
    private Integer experience;
    private Double fees;
}