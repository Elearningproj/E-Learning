package com.project.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class LessonRespDTO extends baseDTO{


	private String lessonName;
	 private String sourceLink;
	 private String videoLink;

}
