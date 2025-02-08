package com.project.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter

public class CartReqDTO extends baseDTO{

	private Long id;
	
	private Long userId;
	
    private List<Long> courseId;
}
