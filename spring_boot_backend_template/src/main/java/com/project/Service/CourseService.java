package com.project.Service;

import java.util.List;

import com.project.Entity.Course;
import com.project.dto.ApiResponse;
import com.project.dto.CourseReqDTO;
import com.project.dto.CourseRespDTO;

public interface CourseService {

	String addNewCourse(CourseReqDTO course);

	List<CourseRespDTO> getAllCourse();

	Course getcourseById(Long courseId);

	ApiResponse deleteCourse(Long courseId);

	Course getCourseByName(String courseName);

	

}
