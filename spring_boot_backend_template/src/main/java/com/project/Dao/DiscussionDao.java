package com.project.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Entity.Course;
import com.project.Entity.Discussion;
import com.project.dto.DiscussionRespDTO;

public interface DiscussionDao extends JpaRepository<Discussion, Long>{

	  List<Discussion> findByCourse(Course course);
	  
	  List<Discussion> findByUserId(Long AdminId);

}
