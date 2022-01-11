package com.stock.controller;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.IntSummaryStatistics;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@GetMapping("/getcompany/{companyCode}/{from}/{to}")
	public ResponseEntity<List<Stock>> findByDateBetween(@PathVariable String companyCode,@PathVariable(value="from") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate from, @PathVariable(value="to") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate to)
	{ List<Stock> sts= stockService.findByDate(companyCode,from,to);
	//List<Stock> st =stockService.findByCompanyCode(companyCode);
	IntSummaryStatistics stats = sts.stream()
            .mapToInt(n -> n)
            .summaryStatistics();
	Map<String, sts> result = new HashMap<>();
	result.put("min", stats.getMin());
	result.put("max", stats.getMax());
	result.put("avg", stats.getAverage());
	System.out.println(stats);
	System.out.println("values of stocks " +sts);
	System.out.println("values of companycode " +companyCode);
	System.out.println("values of from " +from);
	System.out.println("values of to " +to);
		return ResponseEntity.ok(sts);
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
