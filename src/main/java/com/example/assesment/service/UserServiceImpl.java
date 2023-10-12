package com.example.assesment.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.assesment.model.User;
import com.example.assesment.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	@Autowired
    private UserRepository userRepo;
    @Override
    public User postNewUser(User user) {
        return userRepo.save(user);
    }
}
