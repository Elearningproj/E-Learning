package com.project.Entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity
@Setter
@Getter
@NoArgsConstructor
@ToString
public class Course extends BaseEntity{
 
    @Column(name = "course_name")
    @NotBlank(message = "Course Name cannot be empty")
    private String courseName;
    
    @NotNull(message = "Price cannot be empty")
    @Positive(message = "Price must be a positive value")
    private double price;
  
    @Size(min=20,max=100)
    private String description;
    
    @ManyToOne
    @JoinColumn(name = "user_id",nullable = true)
    private User user;
    
}