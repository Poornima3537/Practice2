package com.example.practice2.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.practice2.entity.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {

    List<Doctor> findByMode(String mode);

    List<Doctor> findBySpeciality(String speciality);

    List<Doctor> findByAvailability(Boolean availability);
}