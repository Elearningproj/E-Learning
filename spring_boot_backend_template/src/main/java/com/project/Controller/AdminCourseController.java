package com.project.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.project.Entity.Course;
import com.project.Service.CourseService;
import com.project.dto.ApiResponse;
import com.project.dto.CourseReqDTO;
import com.project.dto.CourseRespDTO;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/admin/courses")
public class AdminCourseController {

	@Autowired
	private CourseService courseService;
	
	@PostMapping
	private ResponseEntity<?> addNewCourse(@Valid @RequestBody CourseReqDTO course){
		System.out.println("Add new Course"+course);
		
		return ResponseEntity.status(HttpStatus.CREATED).body(courseService.addNewCourse(course));
		
		
	}   
	
	@GetMapping
	public ResponseEntity<?> getAllCourses () {
		System.out.println("Get All Courses");
		List<CourseRespDTO> courses =  courseService.getAllCourse();
		if(courses.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		return ResponseEntity.ok(courses);
		
	}
	
//	@GetMapping("/{courseId}")
//	public ResponseEntity<?> getCourceById(@PathVariable Long courseId){
//		System.out.println("Get course by Id");
//		try {
//			Course course = courseService.getcourseById(courseId);
//			return ResponseEntity.ok(course);
//		}catch(RuntimeException e){
//			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(new ApiResponse(e.getMessage()));
//
//			
//		}
//		
//	}
//	
//	@PutMapping("/{courseId}")
//	public ResponseEntity<?> updateCourseDetails(@PathVariable Long courseId,@RequestBody CourseReqDTO course){
//		System.out.println("Get Course Details"+courseId+""+course);
//		return ResponseEntity.ok(courseService.updateCourseDetails(courseId,course));
//	}
//	
	@DeleteMapping("/{courseId}")
	public ResponseEntity<?> deleteCourse(@PathVariable Long courseId){
		System.out.println("Delete Course with Id"+courseId);
		try {
			return ResponseEntity.ok(courseService.deleteCourse(courseId));
		}catch(RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(new ApiResponse(e.getMessage()));
		}
	}
	
}
