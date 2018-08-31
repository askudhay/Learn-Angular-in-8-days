package com.cts.training.studentrestsvc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.cts.training.studentrestsvc.model.Student;
import com.cts.training.studentrestsvc.repo.StudentRepo;

@CrossOrigin()
@RestController
@RequestMapping("/student")
public class StudentController {
	
	@Autowired
	private StudentRepo studRepo;
	
	@GetMapping("/")
	public ResponseEntity<?> getStudents(){
		List<Student> userList = studRepo.findAll();
		if(userList.isEmpty()){			
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);	 
		}
		return new ResponseEntity<List<Student>>(userList,HttpStatus.OK);
	}
	
	@RequestMapping(path="/", method=RequestMethod.POST, consumes={"application/xml","application/json"})
	public ResponseEntity<?> saveUser(@RequestBody Student reqUser, UriComponentsBuilder ucBuilder){
		
		Student user = studRepo.findByStudId(reqUser.getStudId());
		if(user != null){
			return new ResponseEntity<>(HttpStatus.CONFLICT);	
		}
		
		studRepo.save(reqUser);
		return new ResponseEntity<>("Student has been created !", HttpStatus.CREATED);		
	}
}
