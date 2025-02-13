package com.project.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class CartRespDTO extends baseDTO{

	private Long id;
	
    private Long userId;
	
    private List<Long> courseId;
}
