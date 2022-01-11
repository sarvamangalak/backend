package com.stock.model;

import java.time.LocalDate;
import java.time.LocalTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;
@Document(collection ="company")
public class Stock {
	
	private String companyCode;
	private float price;
	 @DateTimeFormat(pattern = "yyyy-MM-dd")
	private  LocalDate date = LocalDate.now();
	private LocalTime time =LocalTime.now();
	private float min;
	private float max;
	private float avg;
	
	public float getMin() {
		return min;
	}
	public void setMin(float min) {
		this.min = min;
	}
	public float getMax() {
		return max;
	}
	public void setMax(float max) {
		this.max = max;
	}
	public float getAvg() {
		return avg;
	}
	public void setAvg(float avg) {
		this.avg = avg;
	}
	public String getCompanyCode() {
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