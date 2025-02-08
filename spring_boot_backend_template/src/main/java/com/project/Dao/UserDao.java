package com.project.Dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Entity.User;

public interface UserDao extends JpaRepository<User, Long> {
	Optional<User> findByEmailAndPassword(String em, String pass);
	
	Optional<User> findById(int adminId);

	
}
