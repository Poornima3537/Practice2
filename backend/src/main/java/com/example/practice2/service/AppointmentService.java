package com.example.practice2.service;


import com.example.practice2.dto.AppointmentRequest;
import com.example.practice2.dto.AppointmentResponse;
import com.example.practice2.entity.Appointment;
import com.example.practice2.entity.Doctor;
import com.example.practice2.repository.AppointmentRepository;
import com.example.practice2.repository.DoctorRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;
    private final DoctorRepository doctorRepository;

    public AppointmentService(AppointmentRepository appointmentRepository,
                              DoctorRepository doctorRepository) {

        this.appointmentRepository = appointmentRepository;
        this.doctorRepository = doctorRepository;
    }

    // BOOK APPOINTMENT
    public AppointmentResponse bookAppointment(AppointmentRequest request) {

        Doctor doctor = doctorRepository.findById(request.getDoctorId())
                .orElseThrow(() -> new RuntimeException("Doctor not found"));

        Appointment appointment = new Appointment();

        appointment.setPatientName(request.getPatientName());
        appointment.setAppointmentDate(request.getAppointmentDate());
        appointment.setAppointmentTime(request.getAppointmentTime());
        appointment.setMode(request.getMode());
        appointment.setStatus("BOOKED");
        appointment.setDoctor(doctor);

        Appointment savedAppointment = appointmentRepository.save(appointment);

        return mapToResponse(savedAppointment);
    }

    // GET ALL APPOINTMENTS
    public List<AppointmentResponse> getAllAppointments() {

        List<Appointment> appointments = appointmentRepository.findAll();

        return appointments.stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    // GET APPOINTMENT BY ID
    public AppointmentResponse getAppointmentById(Long id) {

        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Appointment not found"));

        return mapToResponse(appointment);
    }

    // CANCEL APPOINTMENT
    public AppointmentResponse cancelAppointment(Long id) {

        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Appointment not found"));

        appointment.setStatus("CANCELLED");

        Appointment updatedAppointment = appointmentRepository.save(appointment);

        return mapToResponse(updatedAppointment);
    }

    // COMPLETE APPOINTMENT
    public AppointmentResponse completeAppointment(Long id) {

        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Appointment not found"));

        appointment.setStatus("COMPLETED");

        Appointment updatedAppointment = appointmentRepository.save(appointment);

        return mapToResponse(updatedAppointment);
    }

    // NO SHOW APPOINTMENT
    public AppointmentResponse noShowAppointment(Long id) {

        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Appointment not found"));

        appointment.setStatus("NO_SHOW");

        Appointment updatedAppointment = appointmentRepository.save(appointment);

        return mapToResponse(updatedAppointment);
    }

    // CONVERT ENTITY TO DTO
    private AppointmentResponse mapToResponse(Appointment appointment) {

        AppointmentResponse response = new AppointmentResponse();

        response.setId(appointment.getId());
        response.setPatientName(appointment.getPatientName());
        response.setDoctorName(appointment.getDoctor().getName());
        response.setSpeciality(appointment.getDoctor().getSpeciality());
        response.setAppointmentDate(appointment.getAppointmentDate());
        response.setAppointmentTime(appointment.getAppointmentTime());
        response.setMode(appointment.getMode());
        response.setStatus(appointment.getStatus());

        return response;
    }
}