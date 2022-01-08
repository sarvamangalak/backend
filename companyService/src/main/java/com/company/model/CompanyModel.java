package com.company.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection ="company")
public class CompanyModel {

	 String companyCode;
	 String companyName;
	 String ceo;
	 String website;
	 String stockExchange;
	 float turnOver;
	@DBRef
	 List<StockModel> stock = new ArrayList<>();

	public String getCompanyCode() {
		return companyCode;
	}

	public void setCompanyCode(String companyCode) {
		this.companyCode = companyCode;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getCeo() {
		return ceo;
	}

	public void setCeo(String ceo) {
		this.ceo = ceo;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	public String getStockExchange() {
		return stockExchange;
	}

	public void setStockExchange(String stockExchange) {
		this.stockExchange = stockExchange;
	}

	public float getTurnOver() {
		return turnOver;
	}

	public void setTurnOver(float turnOver) {
		this.turnOver = turnOver;
	}

	public List<StockModel> getStock() {
		return stock;
	}

	public void setStock(List<StockModel> stock) {
		this.stock = stock;
	}

	@Override
	public String toString() {
		return "CompanyModel [companyCode=" + companyCode + ", companyName=" + companyName + ", ceo=" + ceo
				+ ", website=" + website + ", stockExchange=" + stockExchange + ", turnOver=" + turnOver + ", stock="
				+ stock + "]";
	}
	
}
