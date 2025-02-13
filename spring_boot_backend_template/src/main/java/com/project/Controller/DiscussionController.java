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

import com.project.Dao.UserDao;
import com.project.Entity.Course;
import com.project.Entity.Discussion;
import com.project.Entity.User;
import com.project.Service.CourseService;
import com.project.Service.DiscussionService;
import com.project.dto.ApiResponse;
import com.project.dto.DiscussionReqDTO;
import com.project.dto.DiscussionRespDTO;

@RestController
@RequestMapping("/discussion")
public class DiscussionController {

	@Autowired
	private DiscussionService discussionService ;
	
	@Autowired
	private CourseService courseService;
	

	

	 @GetMapping("/{courseId}")
	    public ResponseEntity<List<Discussion>> getDiscussionsAndCourse(@PathVariable Long courseId) {
	        Course course = courseService.getcourseById(courseId);
	        List<Discussion> discussions = discussionService.getDiscussionsCourse(course);
	        return ResponseEntity.ok(discussions);
	    }
	
	 @PostMapping("/addiscussion")
	 public ResponseEntity<?> addDiscussion(@RequestBody DiscussionReqDTO dto ){
		 System.out.println("Dicusiion created!!");
		 Course course = courseService.getcourseById(dto.getCourseId());
		 
		 
		 Discussion discussion = discussionService.addDiscussion(dto);
		 return ResponseEntity.ok(discussion);
		 
	 }
	 
	 @GetMapping("/userId")
	 public List<Discussion> getDiscussionByUserId(@RequestParam Long adminId){
		 System.out.println("Get Discussion by Admin");
		 return discussionService.getDiscussionByUserId(adminId);
	 
	 }
	
}
