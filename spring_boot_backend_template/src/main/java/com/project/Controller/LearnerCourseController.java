package com.project.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.Entity.Course;
import com.project.Service.CourseService;
import com.project.dto.CourseRespDTO;
import com.project.dto.LessonRespDTO;

@RestController
@RequestMapping("/learner/courses")
public class LearnerCourseController {
	

	@Autowired
	private CourseService courseService;
	
	@GetMapping
	public ResponseEntity<?> getAllCourses () {
		System.out.println("Get All Courses");
		List<CourseRespDTO> courses =  courseService.getAllCourse();
		if(courses.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		return ResponseEntity.ok(courses);
		
	}
	
	@GetMapping("/{courseName}")
    public Course getCourseByName(@PathVariable String courseName) {
        return courseService.getCourseByName(courseName);
    }

	
}
