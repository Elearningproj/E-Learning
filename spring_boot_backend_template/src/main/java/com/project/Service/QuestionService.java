package com.project.Service;

import java.util.List;

import com.project.Entity.Question;
import com.project.dto.ApiResponse;
import com.project.dto.QuestionReqDTo;

public interface QuestionService {

   Question addQuestion(QuestionReqDTo dto);

   List<Question> getQuestionByCourseId(Long courseId);

   ApiResponse deleteQuestionByCourseId(Long courseId, Long questionId);

}
