package com.project.Service;

import com.project.Entity.User;
import com.project.dto.AuthReqDTO;
import com.project.dto.UserRespDTO;

import jakarta.validation.Valid;

public interface UserService {

	UserRespDTO signIn(AuthReqDTO dto);

	String addNewUser(User user);
}
