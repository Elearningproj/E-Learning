package com.project.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Entity.Course;
import com.project.Entity.Lesson;

public interface LessonDao extends JpaRepository<Lesson, Long>{

	List<Lesson> findByCourse(Course course);

}
