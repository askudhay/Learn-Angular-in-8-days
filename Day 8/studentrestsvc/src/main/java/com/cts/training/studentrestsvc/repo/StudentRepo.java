package com.cts.training.studentrestsvc.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.training.studentrestsvc.model.Student;

public interface StudentRepo extends JpaRepository<Student, Long> {

	List<Student> findAll();	
	Student findByStudId(long studId);
 
}