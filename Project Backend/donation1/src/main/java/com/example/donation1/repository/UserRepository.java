package com.example.donation1.repository;

import java.util.Optional;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.donation1.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

  User findByEmail(String email);

  User findByName(String name);

  User findByPassword(String password);

  Optional<User> findById(long id);

  List<User> findAll();

  void deleteById(Long id);
}