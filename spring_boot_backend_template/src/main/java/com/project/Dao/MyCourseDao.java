package com.project.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Entity.MyCourse;

public interface MyCourseDao extends JpaRepository<MyCourse, Long>{
	

}
