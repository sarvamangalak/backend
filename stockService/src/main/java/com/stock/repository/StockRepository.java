package com.stock.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.stock.model.Stock;
@Repository
public interface StockRepository extends MongoRepository<Stock, String> {
	
	@Query(value = "select companyCode , prices, to_char(from_tz(date,'IST')'YYYY-MM-DD') as date to_char(from_tz(date,'IST')'YYYY-MM-DD')from comapny where trunc(date) between trunc(:from)and trunc(:to)" )
	public List<Stock> fetchStocksBetDates(Date from ,Date to);

}