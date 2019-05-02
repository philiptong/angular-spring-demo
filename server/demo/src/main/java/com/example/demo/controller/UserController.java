package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import com.example.demo.model.User;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {

    @GetMapping(value = "/users")
    public List<User> users() {
        List<User> users = new ArrayList<>();
        users.add(new User(100001, "philip"));
        return users;
    }

}