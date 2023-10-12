package com.example.assesment.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.assesment.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}
