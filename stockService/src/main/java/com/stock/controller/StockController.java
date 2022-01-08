package com.stock.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
import com.stock.service.StockService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class StockController {

	@Autowired
	StockService stockService;
	
	@GetMapping("/get")
	public ResponseEntity<List<Stock>> getCompanyDetails()
	{
		return ResponseEntity.ok(stockService.getStockDetails());
	}
	
	@GetMapping("/{companyCode}")
	public ResponseEntity<Stock> findById(@PathVariable String companyCode)
	{
		return ResponseEntity.ok(stockService.findById(companyCode));
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