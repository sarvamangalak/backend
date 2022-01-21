package com.stock.controller;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.IntSummaryStatistics;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.stock.model.Stock;
import com.stock.repository.StockRepository;
import com.stock.service.StockService;
@RestController
@CrossOrigin(origins="http://localhost:4200")
public class StockController {

	@Autowired
	StockService stockService;
	@Autowired
	MongoTemplate MongoTemplate;
	
	@Autowired
	StockRepository stockRepository;
	
	@GetMapping("/get")
	public ResponseEntity<List<Stock>> getCompanyDetails()
	{
		return ResponseEntity.ok(stockService.getStockDetails());
	}
	
	@GetMapping("/getcompanycode/{companyCode}")
	public ResponseEntity<List<Stock>> findById(@PathVariable String companyCode)
	{
		return ResponseEntity.ok(stockService.findByCompanyCode(companyCode));
	}
	
	@GetMapping("/getcompany/search")
	public ResponseEntity<List<Stock>> findByDateBetween(@RequestParam String companyCode,@RequestParam (value="from") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate from,@RequestParam (value="to") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate to)
	{ List<Stock> sts= stockService.findByDate(companyCode,from,to);
	//List<Stock> st =stockService.findByCompanyCode(companyCode);
	
	System.out.println("values of stocks " +sts);
	System.out.println("values of companycode " +companyCode);
	System.out.println("values of from " +from);
	System.out.println("values of to " +to);
		return ResponseEntity.ok(sts);
	}
	
	@GetMapping("/getcompanyid/{companyCode}/{from}/{to}")
	public ResponseEntity<List<Stock>> findByDateB(@PathVariable String companyCode,@PathVariable(value="from") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate from, @PathVariable(value="to") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate to)
	{ 
		//Stock companyDetails = StockRepos.findByMaxMin(companyCode,from,to);	//System.out.println("values of stocks " +stockId);
	System.out.println("values of companycode " +companyCode);
	System.out.println("values of from " +from);
	System.out.println("values of to " +to);
	
Aggregation aggr = Aggregation.newAggregation(Aggregation.match(Criteria.where("companyCode").is(companyCode).and("date").lt(to).gt(from)),Aggregation.group("companyCode").avg("price").as("avg").min("price").as("min").max("price").as("max"));
	AggregationResults<Stock> st = MongoTemplate.aggregate(aggr, "company", Stock.class);
	
	//List<Stock> companyDetails = StockRepoService.findByMaxMin(companyCode, from, to);
	System.out.println("values of aggregate " +st.getMappedResults());
		return ResponseEntity.ok(st.getMappedResults());
	}
	
	@PostMapping("/post")
	public ResponseEntity<Stock> addCompany(@RequestBody Stock company)
	{
		
		Stock companyDetails = stockService.addstock(company);
		return ResponseEntity.ok(companyDetails);
		
		
		
	}
	
	@PutMapping("/put")
	public ResponseEntity<Stock> edit(@RequestBody Stock company)
	{
		Stock companyDetails = stockService.editstock(company);
		return ResponseEntity.ok(companyDetails);
	}
	
	@DeleteMapping("/delete/{companyCode}")
	public void delete(@PathVariable String companyCode)
	{stockService.deletestock(companyCode);
		
	}
}
