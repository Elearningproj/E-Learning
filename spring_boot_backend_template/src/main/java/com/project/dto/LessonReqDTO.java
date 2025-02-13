package com.project.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class LessonReqDTO extends baseDTO{
	@NotEmpty
	private String lessonName;
	@NotEmpty
	 private String sourceLink;
	@NotEmpty
	 private String videoLink;
	
	private Long courseId;
	private Long adminId;
}
