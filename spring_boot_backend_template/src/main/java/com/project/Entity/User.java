package com.project.Entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "Users")
@Setter
@Getter
@NoArgsConstructor
@ToString
public class User extends BaseEntity{
	
	 @Column(name="UserName",length = 20)
	 @NotBlank(message = "Name cannot be empty")
	    private String userName;
	 
	 @Column(name="Email",unique = true)
	 @NotBlank(message = "Email cannot be empty")
	    private String email;
	 
	 @Column(length = 20, nullable = false)
	 @NotBlank(message = "Password cannot be empty")
	    private String password;
	 
	 @Column(length = 10)
	    private String phno;
	 
	    private String dob;
	    private String gender;
	    
	    @Enumerated(EnumType.STRING) 
		@Column(length = 20) 
	    private UserRole role;
    

}

