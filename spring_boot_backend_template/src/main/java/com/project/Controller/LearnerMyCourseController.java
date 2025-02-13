package com.project.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.Entity.Cart;
import com.project.Service.CartService;
import com.project.Service.MyCourseService;

import jakarta.transaction.Transactional;

@RestController
@RequestMapping("/myCourses")
public class LearnerMyCourseController {
	
	@Autowired
	private MyCourseService myCourseService ;
	
	@Autowired
	private CartService cartService;
	
	@PostMapping
	public ResponseEntity<?> addCourseToMyCourse(@RequestParam Long courseId){
		return ResponseEntity.ok(myCourseService.addCourseToMyCourse(courseId));
		
		
	}
}

