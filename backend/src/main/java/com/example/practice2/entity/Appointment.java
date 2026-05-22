package com.example.practice2.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "appointments")

@Data
@NoArgsConstructor
@AllArgsConstructor

public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String patientName;

    private LocalDate appointmentDate;

    private LocalTime appointmentTime;

    private String mode;

    private String status;

    @ManyToOne
    @JoinColumn(name = "doctor_id")
    private Doctor doctor;
}
