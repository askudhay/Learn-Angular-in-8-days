package com.cts.training.studentrestsvc.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Student {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int rowId;
	
	public long getStudId() {
		return studId;
	}
	public void setStudId(int studId) {
		this.studId = studId;
	}
	public String getStudName() {
		return studName;
	}
	public void setStudName(String studName) {
		this.studName = studName;
	}
	public boolean isDistinction() {
		return distinction;
	}
	public void setDistinction(boolean distinction) {
		this.distinction = distinction;
	}
	
	long studId;
	String studName;
	boolean distinction;
	
}
