package com.project.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.Entity.Cart;
import com.project.Service.CartService;
import com.project.Service.CourseService;
import com.project.Service.UserService;
import com.project.dto.CartRespDTO;
import com.project.dto.CourseRespDTO;

@RestController
@RequestMapping("/admin/cart")
public class AdminCartController {

	@Autowired 
	private CartService cartService ;
	
	@Autowired
	private CourseService courseService ;
	
	@GetMapping
	public ResponseEntity<?> getAllCart(){
		System.out.println("Get all cart");
		List<CartRespDTO> cart = cartService.getAllCart();
		if(cart.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		return ResponseEntity.ok(cart);
	}
	
	@GetMapping("/{userId}")
	public ResponseEntity<?> getCartById(@PathVariable Long userId){
		System.out.println("Get cart by UserId");
		
		List<CourseRespDTO> course = cartService.getcourseById(userId);
		
		
		return ResponseEntity.ok(course);
	}
	
}
