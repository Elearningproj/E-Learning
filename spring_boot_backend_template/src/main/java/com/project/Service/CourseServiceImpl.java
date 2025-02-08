package com.project.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.CustomException.ResourceNotFoundException;
import com.project.Dao.CourseDao;
import com.project.Entity.Course;
import com.project.dto.ApiResponse;
import com.project.dto.CourseReqDTO;
import com.project.dto.CourseRespDTO;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class CourseServiceImpl implements CourseService{

	@Autowired
	private CourseDao courseDao;
	
	@Autowired
	private ModelMapper modelMapper;
	
//	@Override
//	public String addNewCourse(Course course) {
//		
//		Course persistanceCourse = courseDao.save(course);
//		System.out.println(persistanceCourse);
//		return "Add new course with Id"+persistanceCourse.getId();
//	}

	@Override
	public List<CourseRespDTO> getAllCourse() {
    return courseDao.findAll().stream().map(course -> modelMapper.map(course, CourseRespDTO.class)).collect(Collectors.toList());
	
	}

	@Override
	public Course getcourseById(Long courseId) {
		
		return courseDao.findById(courseId).orElseThrow() ;
	}

//	@Override
//	public ApiResponse updateCourseDetails(Long courseId, CourseReqDTO course) {
//		Course courseEnt = courseDao.findById(courseId).orElseThrow(()->new ResourceNotFoundException("Update failed !!"));
//		modelMapper.map(course, courseEnt);
//		courseDao.save(courseEnt);
//		
//		return new ApiResponse("Upadte Successfully..");
//	}

	@Override
	public ApiResponse deleteCourse(Long courseId) {
		if(courseDao.existsById(courseId)) {
			courseDao.deleteById(courseId);
			return new ApiResponse("Course Deleted..");
		}
		return new ApiResponse(" Deletion Failed !!..");
	}

	@Override
	public String addNewCourse(CourseReqDTO course) {
		System.out.println(course.getCourseName());
		Course courseEnt=modelMapper.map(course,Course.class);
		System.out.println(courseEnt.getCourseName());
		   courseDao.save(courseEnt);
		   
		   return " added!!..";
	}

	@Override
	public Course getCourseByName(String courseName) {
		return courseDao.findByCourseName(courseName).orElseThrow();
		
	}

	
	
	

}
