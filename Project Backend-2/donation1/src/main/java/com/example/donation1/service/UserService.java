package com.example.donation1.service;

import java.util.Optional;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.donation1.model.User;
import com.example.donation1.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User getUserById(Long id) {
        Optional<User> userOptional = userRepository.findById(id);
        return userOptional.orElse(null);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public void DeleteById(Long id) {
        userRepository.deleteById(id);

    }

    public User updateUser(Long id, User updateUser) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setFundNeedFor(updateUser.getFundNeedFor());
            user.setHospitalisation(updateUser.getHospitalisation());
            return userRepository.save(user);
        }
        return null;

    }

}
