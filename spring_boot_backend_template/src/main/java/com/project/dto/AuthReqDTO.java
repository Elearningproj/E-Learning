package com.project.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString

public class AuthReqDTO {

	private String email;
	private String password;
	
}
