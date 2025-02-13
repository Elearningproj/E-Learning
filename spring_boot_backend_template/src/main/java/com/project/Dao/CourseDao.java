package com.project.Dao;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Entity.Course;
import com.project.Entity.User;

public interface CourseDao extends JpaRepository<Course, Long> {
	Optional<Course> findByCourseName(String courseName);
	Optional<Course> findById(int courseId);
}

