package com.company.entity;

import java.time.LocalDate;
import java.time.LocalTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
@Document(collection ="company")
public class Stock {
	
	 String companyCode;
	 float price;
	  LocalDate date = LocalDate.now();
	 LocalTime time =LocalTime.now();
	 String getCompanyCode() {
		return companyCode;
	}
	public void setCompanyCode(String companyCode) {
		this.companyCode = companyCode;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public LocalTime getTime() {
		return time;
	}
	public void setTime(LocalTime time) {
		this.time = time;
	}
	@Override
	public String toString() {
		return "Stock [companyCode=" + companyCode + ", price=" + price + ", date=" + date + ", time=" + time
				+ ", getCompanyCode()=" + getCompanyCode() + ", getPrice()=" + getPrice() + ", getDate()=" + getDate()
				+ ", getTime()=" + getTime() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode()
				+ ", toString()=" + super.toString() + "]";
	}

	
}