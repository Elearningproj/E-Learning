package com.project.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class CourseReqDTO extends baseDTO {
	
	    private String courseName;
	    private int price;
	    private String description;
	

}
