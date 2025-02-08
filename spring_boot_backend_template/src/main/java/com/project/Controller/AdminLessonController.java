package com.project.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.CustomException.ResourceNotFoundException;
import com.project.Dao.UserDao;
import com.project.Entity.Course;
import com.project.Entity.Lesson;
import com.project.Entity.User;
import com.project.Service.LessonService;
import com.project.Service.UserService;
import com.project.dto.ApiResponse;
import com.project.dto.LessonReqDTO;
import com.project.dto.LessonRespDTO;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/admin/lessons")
public class AdminLessonController {

	@Autowired
	private LessonService lessonService ;
	

	@PostMapping
	public ResponseEntity<?> addNewLesson(@Valid @RequestBody LessonReqDTO lesson) {
	    System.out.println("Add new Lesson: " + lesson); // Log the lesson object
	    return ResponseEntity.status(HttpStatus.CREATED)
	            .body(lessonService.addNewLesson(lesson, lesson.getCourseId(), lesson.getAdminId()));
	}

	
	@GetMapping
	private ResponseEntity<?> getAllLesson(){
		System.out.println("Get all lessons");
		List<LessonRespDTO> lesson =lessonService.getAllLesson();
		if(lesson.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}return ResponseEntity.ok(lesson);
	}
	
//	@GetMapping("/lessonId")
//	private ResponseEntity<?> getLessonById(@PathVariable Long lessonId){
//		System.out.println("Get lesson with Id"+lessonId);
//		try {
//			Lesson lesson = lessonService.getLessonById(lessonId);
//					return ResponseEntity.ok(lesson);
//		}catch(RuntimeException e) {
//			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(new ApiResponse(e.getMessage()));
//		}
//	}
	
	@DeleteMapping("/{lessonId}")
	public ResponseEntity<?> deleteLessonById(@PathVariable Long lessonId,@RequestParam Long courseId ,@RequestParam Long adminId) {
	    System.out.println("Deleting lesson with ID: " + lessonId);

	    try {
	            ApiResponse lesson = lessonService.deleteLesson(lessonId, courseId,adminId);
	        return ResponseEntity.ok(lesson);
	        
	    } catch (ResourceNotFoundException e) {
	        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage()));
	    }
	}
}
