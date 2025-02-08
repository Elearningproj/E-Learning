package com.project.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.CustomException.ApiException;
import com.project.CustomException.ResourceNotFoundException;
import com.project.Dao.CourseDao;
import com.project.Dao.LessonDao;
import com.project.Dao.UserDao;
import com.project.Entity.Course;
import com.project.Entity.Lesson;
import com.project.Entity.User;
import com.project.Entity.UserRole;
import com.project.dto.ApiResponse;
import com.project.dto.LessonReqDTO;
import com.project.dto.LessonRespDTO;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class LessonServiceImpl implements LessonService{

	@Autowired
	private LessonDao lessonDao;
	
	@Autowired
	private CourseDao courseDao;
	
	@Autowired
	private UserDao userDao;
	
	
	@Autowired
	private ModelMapper modelMapper;
	
	

	
	@Override
	public List<LessonRespDTO> getAllLesson() {
		return lessonDao.findAll().stream().map(lesson -> modelMapper.map(lesson , LessonRespDTO.class)).collect(Collectors.toList());
	}

	@Override
	public Lesson getLessonById(Long lessonId) {
		
		return lessonDao.findById(lessonId).orElseThrow();
	}

	@Override
	public ApiResponse addNewLesson(LessonReqDTO lesson, Long courseId, Long adminId) {
	    Course course = courseDao.findById(courseId)
	            .orElseThrow(() -> new ResourceNotFoundException("Invalid course ID: " + courseId));

	    User admin = userDao.findById(adminId)
	            .orElseThrow(() -> new ResourceNotFoundException("Invalid admin ID: " + adminId));

	    if (admin.getRole() == UserRole.Admin) {
	        // Map the DTO to the entity
	        Lesson entity = modelMapper.map(lesson, Lesson.class);

	        // Set relationships manually
	        entity.setAdmin(admin);
	        entity.setCourse(course);

	        // Log to check if the mapping works fine
	        System.out.println("Mapped Lesson: " + entity);

	        lessonDao.save(entity);

	        return new ApiResponse("Lesson added successfully.");
	    }

	    throw new ApiException("Failed to add lesson. Admin role required.");
	}



//	@Override
//	public ApiResponse deleteLesson(Long lessonId, Long adminId, Long courseId) {
//		Lesson lesson = lessonDao.findById(lessonId).orElseThrow(()->new ResourceNotFoundException("Lesson not found with Id"+lessonId));
//		 
//	   User admin = userDao.findById(adminId)
//	                .orElseThrow(() -> new ResourceNotFoundException("Admin not found with ID: " + adminId));
//
//	   Course course = courseDao.findById(courseId).orElseThrow(() -> new ResourceNotFoundException("Course not found with ID: " + courseId));
//	   
//		if(admin.getRole()==UserRole.Admin) {
//			course.removeLesson(lesson);
//			courseDao.save(course);
//			lessonDao.delete(lesson);
//			
//			return new ApiResponse ("Lesson deleted !!");	
//			}
//		 throw new ApiException(" Only admins can delete lessons.");
//		
//	}
	@Override
	public ApiResponse deleteLesson(Long lessonId, Long courseId, Long adminId) {
	    // Find the lesson by ID
	    Lesson lesson = lessonDao.findById(lessonId)
	            .orElseThrow(() -> new ResourceNotFoundException("Lesson not found with ID: " + lessonId));

	    // Check if the course exists
	    Course course = courseDao.findById(courseId)
	            .orElseThrow(() -> new ResourceNotFoundException("Course not found with ID: " + courseId));

	    // Check if the admin exists and has the correct role
	    User admin = userDao.findById(adminId)
	            .orElseThrow(() -> new ResourceNotFoundException("Admin not found with ID: " + adminId));

	    if (admin.getRole() == UserRole.Admin) {
	        // Delete the lesson
	        lessonDao.delete(lesson);
	        
	        // Return success response
	        return new ApiResponse("Lesson deleted successfully.");
	    }

	    // If not an admin, throw exception
	    throw new ApiException("Only Admin can delete lessons.");
	}


	@Override
	public List<LessonRespDTO> getAllLessonByCourseId(Long courseId) {
	    System.out.println("Get lesson with courseId: " + courseId);
	    
	    // Fetch the course
	    Course course = courseDao.findById(courseId)
	        .orElseThrow(() -> new ResourceNotFoundException("Course not found with ID: " + courseId));
	    
	    // Fetch lessons associated with the course
	    List<Lesson> lessons = lessonDao.findByCourse(course);
	    
	    // Map lessons to DTO
	    List<LessonRespDTO> lessondto = lessons.stream()
	        .map(lesson -> modelMapper.map(lesson, LessonRespDTO.class))  // Use individual lesson object
	        .collect(Collectors.toList());
	    
	    return lessondto;
	}


	


}
