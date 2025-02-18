package com.project.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.Entity.User;
import com.project.Service.UserService;
import com.project.dto.ApiResponse;
import com.project.dto.AuthReqDTO;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/users")

public class UserController {
	@Autowired
	private UserService userservice;
	
	@PostMapping
	private ResponseEntity<?> addNewUser(@RequestBody User user){
		System.out.println("add nee user"+user);
		return ResponseEntity.status(HttpStatus.CREATED).body(userservice.addNewUser(user));
		
	}
	
	@PostMapping("/signin")
	private ResponseEntity<?> userSignIn(@RequestBody @Valid AuthReqDTO dto){
		System.out.println("in user signin-"+dto);
		try {
			return ResponseEntity.ok(userservice.signIn(dto));
		}catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ApiResponse(e.getMessage()));
		}
	}
	
	
	
	
}
