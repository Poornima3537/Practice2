package com.example.practice2.dto;


import java.time.LocalDate;
import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class AppointmentResponse {

    private Long id;

    private String patientName;

    private String doctorName;

    private String speciality;

    private LocalDate appointmentDate;

    private LocalTime appointmentTime;

    private String mode;

    private String status;
}
