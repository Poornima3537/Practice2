package com.example.practice2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.practice2.dto.DoctorRequest;
import com.example.practice2.dto.DoctorResponse;
import com.example.practice2.entity.Doctor;
import com.example.practice2.service.DoctorService;

@RestController
@RequestMapping("/api/doctors")
@CrossOrigin(origins = "http://localhost:3000",
        allowCredentials = "true")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @GetMapping
    public List<DoctorResponse> getAllDoctors() {

        return doctorService.getAllDoctors();
    }

    @GetMapping("/{id}")
    public DoctorResponse getDoctorById(@PathVariable Long id) {

        return doctorService.getDoctorById(id);
    }

    @GetMapping("/mode/{mode}")
    public List<DoctorResponse> getDoctorsByMode(
            @PathVariable String mode) {

        return doctorService.getDoctorsByMode(mode);
    }

    @GetMapping("/speciality/{speciality}")
    public List<DoctorResponse> getDoctorsBySpeciality(
            @PathVariable String speciality) {

        return doctorService.getDoctorsBySpeciality(speciality);
    }

    @PostMapping
    public Doctor addDoctor(@RequestBody DoctorRequest request){

        return doctorService.addDoctor(request);
    }

    @PutMapping("/{id}")
    public Doctor updateDoctor(@PathVariable Long id,
                               @RequestBody Doctor doctor) {

        return doctorService.updateDoctor(id,
                doctor);
    }

    @DeleteMapping("/{id}")
    public String deleteDoctor(@PathVariable Long id) {

        return doctorService.deleteDoctor(id);
    }
}