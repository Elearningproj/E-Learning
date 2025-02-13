package com.project.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = "course,admin")

public class Lesson extends BaseEntity{
	
	@Column(name="lesson_name",nullable = true)
	private String lessonName;
	
	@Column(name="source_link")
	 @NotBlank(message = "SourceLink cannot be empty")
	 private String sourceLink;
	
	@Column(name="video_link")
	@NotBlank(message = "VideoLink cannot be empty")
	 private String videoLink;

	    @ManyToOne
	    @JoinColumn(name = "course_id",nullable = false)
	    private Course course;

	    @ManyToOne
	    @JoinColumn(name = "user_id",nullable = false)
	    private User admin;

}
