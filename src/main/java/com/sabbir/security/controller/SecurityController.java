package com.sabbir.security.controller;

import com.sabbir.security.model.User;
import com.sabbir.security.service.UserService;
import com.sabbir.security.util.JwtUtil;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth/api")
public class SecurityController {
    private final JwtUtil jwtUtil;
    private final UserService userService;
    private final AuthenticationManager authenticationManager;

    public SecurityController(JwtUtil jwtUtil, UserService userService, AuthenticationManager authenticationManager) {
        this.jwtUtil = jwtUtil;
        this.userService = userService;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/student/registration")
    public ResponseEntity<?> StudentRegistration(@RequestBody User user){
        Map<String, Object> response = new HashMap<>();
        if(userService.findUserByUsername(user.getUsername()) != null){
            response.put("message", "username already exists");
            return new ResponseEntity<>(response, HttpStatus.CONFLICT);
        }
        try {
            userService.saveStudent(user);
        } catch (Exception ex){
            response.put("message", "Something Unexpected Happened, Try Again");
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }
        response.put("message", "registration successfully.");
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PostMapping("/university/registration")
    public ResponseEntity<?> UniversityRegistration(@RequestBody User user){
        Map<String, Object> response = new HashMap<>();
        if(userService.findUserByUsername(user.getUsername()) != null){
            response.put("message", "username already exists");
            return new ResponseEntity<>(response, HttpStatus.CONFLICT);
        }
        try {
            userService.saveUniversity(user);
        } catch (Exception ex){
            response.put("message", "Something Unexpected Happened, Try Again");
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }
        response.put("message", "registration successfully.");
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        Map<String, Object> response = new HashMap<>();
        try {
            // check if username + password is correct
            UsernamePasswordAuthenticationToken authenticationToken =
                    new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword());
            Authentication authentication = authenticationManager.authenticate(authenticationToken);
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();

            //create jwt token
            response.put("token", jwtUtil.generateToken(userDetails));
            response.put("username", user.getUsername());
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }
        catch (Exception ex){
            response.put("message", "Invalid Credential");
            return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
        }
    }

    // Next day start from here
    @GetMapping("/student/dashboard")
    public String studentDashboard(){
        return "Student dashboard";
    }

}
