package com.project.Dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Entity.Cart;

public interface CartDao extends JpaRepository<Cart, Long> {

	   Optional<Cart> findByUserId(Long userId);

	   Optional<Cart> findByCourseId(Long courseId);
	   
	   
}
