package com.example.practice2.controller;


import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.practice2.dto.AppointmentRequest;
import com.example.practice2.dto.AppointmentResponse;
import com.example.practice2.service.AppointmentService;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin(origins = "http://localhost:5173")

public class AppointmentController {

    private final AppointmentService appointmentService;

    public AppointmentController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }

    // BOOK APPOINTMENT
    @PostMapping("/book")
    public AppointmentResponse bookAppointment(
            @RequestBody AppointmentRequest request) {

        return appointmentService.bookAppointment(request);
    }

    // GET ALL APPOINTMENTS
    @GetMapping
    public List<AppointmentResponse> getAllAppointments() {

        return appointmentService.getAllAppointments();
    }

    // GET APPOINTMENT BY ID
    @GetMapping("/{id}")
    public AppointmentResponse getAppointmentById(
            @PathVariable Long id) {

        return appointmentService.getAppointmentById(id);
    }

    // CANCEL APPOINTMENT
    @PutMapping("/cancel/{id}")
    public AppointmentResponse cancelAppointment(
            @PathVariable Long id) {

        return appointmentService.cancelAppointment(id);
    }

    // COMPLETE APPOINTMENT
    @PutMapping("/complete/{id}")
    public AppointmentResponse completeAppointment(
            @PathVariable Long id) {

        return appointmentService.completeAppointment(id);
    }

    // NO SHOW APPOINTMENT
    @PutMapping("/no-show/{id}")
    public AppointmentResponse noShowAppointment(
            @PathVariable Long id) {

        return appointmentService.noShowAppointment(id);
    }
}
