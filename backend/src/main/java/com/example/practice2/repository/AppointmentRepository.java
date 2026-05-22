package com.example.practice2.repository;


import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.practice2.entity.Appointment;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    List<Appointment> findByStatus(String status);

    List<Appointment> findByMode(String mode);

    List<Appointment> findByAppointmentDate(LocalDate appointmentDate);
}
