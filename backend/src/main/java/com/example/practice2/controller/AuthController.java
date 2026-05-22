package com.example.practice2.controller;

import com.example.practice2.dto.LoginRequest;
import com.example.practice2.dto.RegisterRequest;
import com.example.practice2.service.AuthService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000",
        allowCredentials = "true")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request) {

        return authService.registerUser(request);
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request,
                        HttpSession session) {

        return authService.loginUser(request,
                session);
    }

    @PostMapping("/logout")
    public String logout(HttpSession session) {

        return authService.logoutUser(session);
    }
}