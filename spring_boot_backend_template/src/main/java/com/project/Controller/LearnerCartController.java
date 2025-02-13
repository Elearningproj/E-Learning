package com.project.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.Service.CartService;

@RestController
@RequestMapping("/learner/cart")
public class LearnerCartController {
	@Autowired
	private CartService cartService;
	
	@PostMapping
    public ResponseEntity<?> addCourseToCart(@RequestParam Long userId , @RequestParam Long courseId){
		System.out.println("Course Added in Cart with UserId"+userId+"and courseId"+courseId);
		return ResponseEntity.ok(cartService.addCourseToCart(userId,courseId));
	}

	@DeleteMapping("/cart/{userId}")
	public ResponseEntity<?> removeCourseFromCart(@PathVariable Long userId,@RequestParam Long courseId){
		System.out.println("Course deleted from Cart with UserId"+userId+"and courseId"+courseId);
		return ResponseEntity.ok(cartService.removeCourseFromCart(userId,courseId));
	}
}
