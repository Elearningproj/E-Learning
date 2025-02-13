package com.project.Service;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Entity.Cart;
import com.project.dto.ApiResponse;
import com.project.dto.CartRespDTO;
import com.project.dto.CourseRespDTO;

public interface CartService {

	List<CartRespDTO> getAllCart();

	ApiResponse addCourseToCart(Long userId, Long courseId);

	ApiResponse removeCourseFromCart(Long userId, Long courseId);

	List<CourseRespDTO> getcourseById(Long userId);
	

}
