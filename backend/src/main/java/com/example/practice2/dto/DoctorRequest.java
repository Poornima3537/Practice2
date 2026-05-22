package com.example.practice2.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class DoctorRequest {

    private String name;

    private String speciality;

    private String mode;

    private Boolean availability;

    private Integer experience;

    private Double fees;
}
