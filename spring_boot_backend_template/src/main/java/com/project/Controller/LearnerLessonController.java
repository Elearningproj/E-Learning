package com.project.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.Service.LessonService;
import com.project.dto.LessonReqDTO;
import com.project.dto.LessonRespDTO;

@RestController
@RequestMapping("/learner/lessons")
public class LearnerLessonController {

	@Autowired
	private LessonService lessonService ;
	
	@GetMapping("/{courseId}")
	private ResponseEntity<?> getAllLessonByCourseId(@RequestParam Long courseId) {  
	    System.out.println("Get all lessons for Course ID: " + courseId);
	    
	    List<LessonRespDTO> lesson = lessonService.getAllLessonByCourseId(courseId);
	    
	    if (lesson.isEmpty()) {
	        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	    }
	    return ResponseEntity.ok(lesson);
	}

}
