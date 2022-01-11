package com.company.controller;


import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.company.entity.Company;
import com.company.model.CompanyModel;
import com.company.service.CompanyService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class CompanyController {

	@Autowired
	CompanyService companyService;
	
	
	@GetMapping("/get")
	public ResponseEntity<List<Company>> getCompanyDetails()
	{
		return ResponseEntity.ok(companyService.getCompanyDetails());
	}
	@GetMapping("/stockPrices/{companyCode}")
	public ResponseEntity<Company> getStockPrices(@PathVariable String companyCode)
			
	{
		Company stockPriceDtos = companyService.getStock(companyCode);
		
		return ResponseEntity.ok(stockPriceDtos);
	}
	
	
	/*
	 * @GetMapping("/{companyCode}") public ResponseEntity<Optional<Company>>
	 * findById(@PathVariable String companyCode, @RequestBody CompanyModel model) {
	 * ModelMapper mapper = new ModelMapper(); Company company = mapper.map(model,
	 * Company.class); List<Stock> stock =
	 * Arrays.asList(mapper.map(StockModel[].class, Stock[].class));
	 * company.setStock(stock);
	 * 
	 * return ResponseEntity.ok(companyService.findById(companyCode)); }
	 */
	
	@PostMapping("/post")
	public ResponseEntity<Company> addCompany(@RequestBody Company company)
	{
		
		Company companyDetails = companyService.addCompany(company);
		return ResponseEntity.ok(companyDetails);
		
		
		
	}
	
	@PutMapping("/put")
	public ResponseEntity<Company> edit(@RequestBody Company company)
	{
		Company companyDetails = companyService.editCompany(company);
		return ResponseEntity.ok(companyDetails);
	}
	
	@DeleteMapping("/delete/{companyCode}")
	public void delete(@PathVariable String companyCode)
	{companyService.deleteCompany(companyCode);
		
	}
}