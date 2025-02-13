package com.project.CustomException;

public class ApiException extends RuntimeException {
	public ApiException(String errMesg) {
		super(errMesg);
	}
}