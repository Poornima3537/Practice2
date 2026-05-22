package com.example.practice2.controller;


import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.practice2.service.AdminService;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:5173")

public class AdminController {

    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    // REVENUE SUMMARY
    @GetMapping("/revenue")
    public Map<String, Object> getRevenueSummary() {

        return adminService.getRevenueSummary();
    }

    // DAILY SUMMARY
    @GetMapping("/daily-summary")
    public Map<String, Object> getDailySummary() {

        return adminService.getDailySummary();
    }

    // ONLINE / OFFLINE SUMMARY
    @GetMapping("/mode-summary")
    public Map<String, Object> getModeSummary() {

        return adminService.getModeSummary();
    }

    // SPECIALITY SUMMARY
    @GetMapping("/speciality-summary")
    public Map<String, Long> getSpecialitySummary() {

        return adminService.getSpecialitySummary();
    }
}