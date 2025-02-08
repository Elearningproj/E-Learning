package com.project.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.Entity.Question;
import com.project.Service.QuestionService;
import com.project.dto.QuestionReqDTo;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/admin/question")
public class AdminQuestionController {

	@Autowired
	private QuestionService questionService;
	
	@PostMapping
	public ResponseEntity<?> addQuestion(@Valid @RequestBody QuestionReqDTo dto){
		return ResponseEntity.ok(questionService.addQuestion(dto));
	}
	
	@GetMapping("/{courseId}")
	public ResponseEntity<?> getquestionByCourseid(@PathVariable Long courseId){
		List<Question> question = questionService.getQuestionByCourseId(courseId);
		return ResponseEntity.ok(question);
	}
	
	@DeleteMapping("/{courseId}/{questionId}")
	public ResponseEntity<?> deleteQuestionByCourseId(@PathVariable Long courseId,@PathVariable Long questionId){
		return ResponseEntity.ok(questionService.deleteQuestionByCourseId(courseId, questionId));
	}
	
}
