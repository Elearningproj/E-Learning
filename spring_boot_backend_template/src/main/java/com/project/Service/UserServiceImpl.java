package com.project.Service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.CustomException.ApiException;
import com.project.Dao.UserDao;
import com.project.Entity.User;
import com.project.dto.AuthReqDTO;
import com.project.dto.UserRespDTO;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService{

	@Autowired
	private UserDao userDao;
	
	@Autowired
	private ModelMapper modelMapper ;

	
	@Override
	public UserRespDTO signIn(AuthReqDTO dto) {
		User userEntity = userDao.
				findByEmailAndPassword(dto.getEmail(), dto.getPassword())
				.orElseThrow(()-> new ApiException("Invalid Email or password !!!!!"));
		return modelMapper.map(userEntity, UserRespDTO.class);
		
	}


	@Override
	public String addNewUser(User user) {
		User persistanceUser = userDao.save(user);
		
		return "Add new User with Id"+persistanceUser.getId();
	}

}
