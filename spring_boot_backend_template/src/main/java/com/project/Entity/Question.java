package com.project.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Question  extends BaseEntity{
  
	
    @Column(name = "Question")
    @NotBlank(message = "Question cannot be empty")
     private String question;
    
    @Column(name="Answer")
    @NotBlank(message = "Answer cannot be empty")
    private String answer;

    @ManyToOne
    @JoinColumn(name = "course_id",nullable = false)
    private Course course;
}