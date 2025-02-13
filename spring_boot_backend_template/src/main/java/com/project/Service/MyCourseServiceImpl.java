package com.project.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.Dao.CartDao;
import com.project.Dao.CourseDao;
import com.project.Dao.MyCourseDao;
import com.project.Entity.Cart;
import com.project.Entity.Course;
import com.project.Entity.MyCourse;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class MyCourseServiceImpl implements MyCourseService{
	@Autowired
	private MyCourseDao myCourseDao;
	
	@Autowired
	private CartDao cartDao;
	
	@Autowired
	private CourseDao courseDao;

	@Override
	public Course addCourseToMyCourse(Long courseId) {
		System.out.println("Add Course to MyCourse");
		
		Optional<Course> courseEnt = courseDao.findById(courseId);
	    if (courseEnt.isEmpty()) {
	        throw new RuntimeException("Course not found with ID: " + courseId);
	    }
	    Course course = courseEnt.get();

		
		Optional<Cart> cartEnt = cartDao.findByCourseId(courseId);
		if(cartEnt.isEmpty()) {
			 throw new RuntimeException("Cart not found with ID: " + courseId);
		}
		Cart cart = cartEnt.get();
		
		MyCourse myCourse = new MyCourse();
		myCourse.setCart(cart);
		myCourseDao.save(myCourse);
		return course;
		}

}
