package com.project.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@NoArgsConstructor

public class CourseRespDTO extends baseDTO{
	@NotEmpty
	    private String courseName;
	@NotEmpty
	    private int price;
	@NotEmpty
	    private String description;

	private int adminId;
}
