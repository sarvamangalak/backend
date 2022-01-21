package com.stock.repository;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import com.stock.model.Stock;
@Repository
public interface StockRepository extends MongoRepository<Stock, String>  {
	@Query(value = "{'companyCode':?0 ,'date':{ $gte: ?1, $lte: ?2 } }")
	public List<Stock> findByDate(String companyCode,LocalDate from ,LocalDate to);
	public List<Stock> findByCompanyCode(String companyCode);
//	public List<Stock> findByMaxMin(String companyCode,LocalDate from ,LocalDate to);
	/*public List<Stock> findByMaxMin(){
	Aggregation aggr =
			 Aggregation.newAggregation(Aggregation.match(Criteria.where("companyCode").is
			 (companyCode).and("date").lt(to).gt(from)),Aggregation.group("companyCode").
			 * *///avg("price").as("avg").min("price").as("min").max("price").as("max"));
	
}
