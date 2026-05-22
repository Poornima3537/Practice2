package com.example.practice2.service;

import com.example.practice2.dto.LoginRequest;
import com.example.practice2.dto.RegisterRequest;
import com.example.practice2.entity.User;
import com.example.practice2.repository.UserRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public String registerUser(RegisterRequest request) {

        if (userRepository.existsByUsername(request.getUsername())) {
            return "Username already exists";
        }

        User user = new User();

        user.setUsername(request.getUsername());
        user.setPassword(encoder.encode(request.getPassword()));
        user.setRole(request.getRole());

        userRepository.save(user);

        return "User Registered Successfully";
    }

    public String loginUser(LoginRequest request,
                            HttpSession session) {

        User user = userRepository.findByUsername(request.getUsername())
                .orElse(null);

        if (user == null) {
            return "User Not Found";
        }

        if (!encoder.matches(request.getPassword(),
                user.getPassword())) {

            return "Invalid Password";
        }

        session.setAttribute("loggedInUser",
                user.getUsername());

        session.setAttribute("role",
                user.getRole());

        return "Login Successful";
    }

    public String logoutUser(HttpSession session) {

        session.invalidate();

        return "Logged Out Successfully";
    }
}