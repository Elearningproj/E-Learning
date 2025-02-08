package com.project.Entity;

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
public class MyCourse extends BaseEntity{
	
	@ManyToOne
	@JoinColumn(name="cart_id")
	private Cart cart;
	

}
