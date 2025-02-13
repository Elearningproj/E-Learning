package com.project.Entity;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@NoArgsConstructor


public class Cart extends BaseEntity {

	 @OneToOne
	    @JoinColumn(name = "user_id", nullable = false)
	    private User user;
	    
	   @ManyToOne
	    @JoinColumn(name = "course_id",nullable = true)
	    private Course course;


}
