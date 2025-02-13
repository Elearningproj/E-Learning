package com.project.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.CustomException.ResourceNotFoundException;
import com.project.Dao.CartDao;
import com.project.Dao.CourseDao;
import com.project.Dao.UserDao;
import com.project.Entity.Cart;
import com.project.Entity.Course;
import com.project.Entity.User;
import com.project.dto.ApiResponse;
import com.project.dto.CartRespDTO;
import com.project.dto.CourseRespDTO;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class CartServiceImpl implements CartService{

	@Autowired
	private CartDao cartDao;
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private CourseDao courseDao;
	
	@Autowired
	private ModelMapper modelmapper;

	@Override
	public List<CartRespDTO> getAllCart() {
		System.out.println("Get all Cart Details");
		return cartDao.findAll().stream().map(cart -> modelmapper.map(cart, CartRespDTO.class)).collect(Collectors.toList());
		
	}

	@Override
	public ApiResponse addCourseToCart(Long userId, Long courseId) {
		User user = userDao.findById(userId).orElseThrow(()->new ResourceNotFoundException("UserId noy found"));
		
		Course course = courseDao.findById(courseId).orElseThrow(()->new ResourceNotFoundException("CourseId not found"));
		
		Cart cart = cartDao.findByUserId(userId).orElse(new Cart());
		
		cart.setUser(user);
		cart.setCourse(course);
		cartDao.save(cart); 
		
		return new ApiResponse("Courses added in cart successfully...");
		
		
	}

	@Override
	public ApiResponse removeCourseFromCart(Long userId, Long courseId) {
		
User user = userDao.findById(userId).orElseThrow(()->new ResourceNotFoundException("UserId noy found"));
		
		Course course = courseDao.findById(courseId).orElseThrow(()->new ResourceNotFoundException("CourseId not found"));
		
		Cart cart = cartDao.findByUserId(userId).orElse(new Cart());
		
		cart.setUser(user);
		cartDao.deleteById(courseId);
			
		return new ApiResponse("Courses deletes from cart successfully...");
		
	}

	@Override
	public List<CourseRespDTO> getcourseById(Long userId) {
		System.out.println("Get all courses by UserId"+userId);
		
		return cartDao.findByUserId(userId).stream().map(cart -> modelmapper.map(cart.getCourse(),CourseRespDTO.class)).collect(Collectors.toList());
	}
	
	 

}
