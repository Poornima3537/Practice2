package com.example.practice2.controller;

import com.example.practice2.dto.DoctorResponse;
import com.example.practice2.entity.Doctor;
import com.example.practice2.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public Doctor addDoctor(@RequestBody Doctor doctor) {

        return doctorService.addDoctor(doctor);
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