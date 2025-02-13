package com.project.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Setter
@Getter
@ToString

public class baseDTO {
    private Long id;
    
    private LocalDate CreatedOn;
    
    private LocalDateTime UpdatedOn;
    
    
    
}
