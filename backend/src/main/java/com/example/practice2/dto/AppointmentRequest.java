package com.example.practice2.dto;


import java.time.LocalDate;
import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class AppointmentRequest {

    private String patientName;

    private LocalDate appointmentDate;

    private LocalTime appointmentTime;

    private String mode;

    private Long doctorId;
}