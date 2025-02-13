package com.project.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter

@Getter
@NoArgsConstructor

public class Discussion extends BaseEntity{
    
	 @Column(length = 100)
	 private String content;
   
    @ManyToOne
    @JoinColumn(name = "course_id",nullable = false)
    private Course course;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false) // Each discussion is linked to one user
    private User user;
   
}
