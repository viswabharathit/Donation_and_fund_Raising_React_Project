package com.example.donation1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.donation1.model.User;
import com.example.donation1.repository.UserRepository;
import com.example.donation1.service.UserService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService us;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        // Check if user with the same email or name already exists
        User existingUserByEmail = userRepository.findByEmail(user.getEmail());
        User existingUserByName = userRepository.findByName(user.getName());

        if (existingUserByEmail != null) {
            return ResponseEntity.badRequest().body("User with this email already exists");
        }

        if (existingUserByName != null) {
            return ResponseEntity.badRequest().body("User with this name already exists");
        }

        // Save the user if not exists
        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user) {

        User existingUserByName = userRepository.findByName(user.getName());
        User existingUserByPassword = userRepository.findByPassword(user.getPassword());

        if (existingUserByName != null && existingUserByPassword != null) {

            return ResponseEntity.ok("Login successful");
        } else {

            return ResponseEntity.badRequest().body("Invalid name or password");
        }
    }

    @GetMapping("/getting/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        try {
            return new ResponseEntity<>(us.getUserById(id), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("No such data available", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getting")
    public ResponseEntity<?> getAllUsers() {
        try {
            return new ResponseEntity<>(us.getAllUsers(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("No data available", HttpStatus.NOT_FOUND);
        }

    }

    @DeleteMapping("/deleting/{id}")
    public ResponseEntity<?> DeleteById(@PathVariable Long id) {
        try {
            us.DeleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("No such data available", HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("updating/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody User updateUser) {
        try {
            return new ResponseEntity<>(us.updateUser(id, updateUser), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("No such data available", HttpStatus.NOT_FOUND);
        }
    }

}