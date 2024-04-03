package com.example.donation1.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "user")
public class User {
    @Id

    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String email;
    private String password;
    private String fundNeedFor;
    private String hospitalisation;

    public User() {
    }

    public User(Long id, String name, String email, String password, String fundNeedFor, String hospitalisation) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.fundNeedFor = fundNeedFor;
        this.hospitalisation = hospitalisation;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFundNeedFor() {
        return fundNeedFor;
    }

    public void setFundNeedFor(String fundNeedFor) {
        this.fundNeedFor = fundNeedFor;
    }

    public String getHospitalisation() {
        return hospitalisation;
    }

    public void setHospitalisation(String hospitalisation) {
        this.hospitalisation = hospitalisation;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}