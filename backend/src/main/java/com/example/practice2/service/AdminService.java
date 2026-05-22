package com.example.practice2.service;


import com.example.practice2.entity.Appointment;
import com.example.practice2.repository.AppointmentRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AdminService {

    private final AppointmentRepository appointmentRepository;

    public AdminService(AppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    // TOTAL REVENUE
    public Map<String, Object> getRevenueSummary() {

        List<Appointment> appointments = appointmentRepository.findAll();

        double totalRevenue = appointments.stream()
                .filter(a -> a.getStatus().equals("COMPLETED"))
                .count() * 500;

        Map<String, Object> response = new HashMap<>();

        response.put("totalAppointments", appointments.size());
        response.put("completedAppointments",
                appointments.stream()
                        .filter(a -> a.getStatus().equals("COMPLETED"))
                        .count());

        response.put("totalRevenue", totalRevenue);

        return response;
    }

    // DAILY SUMMARY
    public Map<String, Object> getDailySummary() {

        LocalDate today = LocalDate.now();

        List<Appointment> todayAppointments =
                appointmentRepository.findByAppointmentDate(today);

        Map<String, Object> response = new HashMap<>();

        response.put("date", today);
        response.put("appointmentsCount", todayAppointments.size());

        return response;
    }

    // ONLINE / OFFLINE SUMMARY
    public Map<String, Object> getModeSummary() {

        long onlineCount = appointmentRepository
                .findByMode("ONLINE")
                .size();

        long offlineCount = appointmentRepository
                .findByMode("OFFLINE")
                .size();

        Map<String, Object> response = new HashMap<>();

        response.put("onlineAppointments", onlineCount);
        response.put("offlineAppointments", offlineCount);

        return response;
    }

    // SPECIALITY SUMMARY
    public Map<String, Long> getSpecialitySummary() {

        List<Appointment> appointments = appointmentRepository.findAll();

        Map<String, Long> specialitySummary = new HashMap<>();

        for (Appointment appointment : appointments) {

            String speciality =
                    appointment.getDoctor().getSpeciality();

            specialitySummary.put(
                    speciality,
                    specialitySummary.getOrDefault(speciality, 0L) + 1
            );
        }

        return specialitySummary;
    }
}