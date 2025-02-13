package com.project.Service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.project.Entity.Course;
import com.project.Entity.Discussion;
import com.project.dto.DiscussionReqDTO;
import com.project.dto.DiscussionRespDTO;

public interface DiscussionService {


	List<Discussion> getDiscussionsCourse(Course course);

	Discussion addDiscussion(DiscussionReqDTO dto);

	List<Discussion> getDiscussionByUserId(Long adminId);

}
