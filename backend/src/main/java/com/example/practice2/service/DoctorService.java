package com.example.practice2.service;

import com.example.practice2.dto.DoctorResponse;
import com.example.practice2.entity.Doctor;
import com.example.practice2.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    public List<DoctorResponse> getAllDoctors() {

        return doctorRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public DoctorResponse getDoctorById(Long id) {

        Doctor doctor = doctorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Doctor Not Found"));

        return mapToResponse(doctor);
    }

    public List<DoctorResponse> getDoctorsByMode(String mode) {

        return doctorRepository.findByMode(mode)
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public List<DoctorResponse> getDoctorsBySpeciality(String speciality) {

        return doctorRepository.findBySpeciality(speciality)
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public Doctor addDoctor(Doctor doctor) {

        return doctorRepository.save(doctor);
    }

    public Doctor updateDoctor(Long id,
                               Doctor updatedDoctor) {

        Doctor doctor = doctorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Doctor Not Found"));

        doctor.setName(updatedDoctor.getName());
        doctor.setSpeciality(updatedDoctor.getSpeciality());
        doctor.setMode(updatedDoctor.getMode());
        doctor.setAvailability(updatedDoctor.getAvailability());
        doctor.setExperience(updatedDoctor.getExperience());
        doctor.setFees(updatedDoctor.getFees());

        return doctorRepository.save(doctor);
    }

    public String deleteDoctor(Long id) {

        doctorRepository.deleteById(id);

        return "Doctor Deleted Successfully";
    }

    private DoctorResponse mapToResponse(Doctor doctor) {

        return new DoctorResponse(
                doctor.getId(),
                doctor.getName(),
                doctor.getSpeciality(),
                doctor.getMode(),
                doctor.getAvailability(),
                doctor.getExperience(),
                doctor.getFees()
        );
    }
}