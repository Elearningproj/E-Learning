package com.project.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.CustomException.ResourceNotFoundException;
import com.project.Dao.CourseDao;
import com.project.Dao.QuestionDao;
import com.project.Entity.Course;
import com.project.Entity.Question;
import com.project.dto.ApiResponse;
import com.project.dto.QuestionReqDTo;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class QuestionServiceImpl implements QuestionService{

	@Autowired
	private QuestionDao questionDao;
	
	@Autowired
	private CourseDao courseDao;
	
	@Override
	public Question addQuestion(QuestionReqDTo dto) {
		Course course = courseDao.findById(dto.getCourseId()).orElseThrow(()->new ResourceNotFoundException("CourseId not found"));
		
		Question question = new Question();
		question.setQuestion(dto.getQuestion());
		question.setAnswer(dto.getAnswer());
		question.setCourse(course);
		
		return questionDao.save(question);
	}

	@Override
	public List<Question> getQuestionByCourseId(Long courseId) {
		 if (!courseDao.existsById(courseId)) {
	            throw new ResourceNotFoundException("Course not found with ID: " + courseId);
	        }
		 
	        return questionDao.findByCourseId(courseId);
	    }

	@Override
	public ApiResponse deleteQuestionByCourseId(Long courseId, Long questionId) {
		Question question= questionDao.findById(questionId).orElseThrow(()->new ResourceNotFoundException("questionId not found"));
		
		if(!question.getCourse().getId().equals(courseId)) {
			
		   throw new ResourceNotFoundException("Question does not exist");
	}
		 
	questionDao.deleteById(questionId);
	return new ApiResponse("Question deleted successfully!");
		
	}
	
	

}
