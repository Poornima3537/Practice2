package com.example.practice2.repository;

import com.example.practice2.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {

    List<Doctor> findByMode(String mode);

    List<Doctor> findBySpeciality(String speciality);

    List<Doctor> findByAvailability(String availability);
}