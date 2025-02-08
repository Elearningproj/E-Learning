package com.project.Service;

import java.util.List;

import com.project.Entity.Course;
import com.project.Entity.Lesson;
import com.project.Entity.User;
import com.project.dto.ApiResponse;
import com.project.dto.LessonReqDTO;
import com.project.dto.LessonRespDTO;

public interface LessonService {

	

	List<LessonRespDTO> getAllLesson();

	Lesson getLessonById(Long lessonId);

	 ApiResponse addNewLesson(LessonReqDTO lesson, Long courseId, Long adminId);

	ApiResponse deleteLesson(Long lessonId, Long adminId, Long courseId);

	List<LessonRespDTO> getAllLessonByCourseId(Long courseId);

	

}
