package com.project.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.Dao.CourseDao;
import com.project.Dao.DiscussionDao;
import com.project.Dao.UserDao;
import com.project.Entity.Course;
import com.project.Entity.Discussion;
import com.project.Entity.User;
import com.project.dto.DiscussionReqDTO;
import com.project.dto.DiscussionRespDTO;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class DiscussionServiceImpl implements DiscussionService{
	
	@Autowired
	private DiscussionDao discussionDao ;
	
	@Autowired
	private CourseDao courseDao;
	
	@Autowired
	private UserDao userDao;

	@Override
	   public List<Discussion> getDiscussionsCourse(Course course) {
        return discussionDao.findByCourse(course);
    }

	@Override
	public Discussion addDiscussion(DiscussionReqDTO dto) {
	
	    Course course = courseDao.findById(dto.getCourseId())
	        .orElseThrow(() -> new RuntimeException("Course not found"));

	
	    User user = userDao.findById(dto.getUserId())
	        .orElseThrow(() -> new RuntimeException("User not found"));

	    Discussion discussion = new Discussion();
	    discussion.setContent(dto.getContent());
	    discussion.setCourse(course);
	    discussion.setUser(user);

	
	    return discussionDao.save(discussion);
	}

	@Override
	public List<Discussion> getDiscussionByUserId(Long adminId) {
		
		return discussionDao.findByUserId(adminId);
	}


}
