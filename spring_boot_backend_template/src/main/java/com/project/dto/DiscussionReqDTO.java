package com.project.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter

public class DiscussionReqDTO {
	 private String content;
	   
	 private Long courseId;
	 
	 private Long userId;
}
