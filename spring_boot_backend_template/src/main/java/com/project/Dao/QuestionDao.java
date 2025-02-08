package com.project.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Entity.Question;

public interface QuestionDao extends JpaRepository<Question, Long>{

	List<Question> findByCourseId(Long CourseId);
}
