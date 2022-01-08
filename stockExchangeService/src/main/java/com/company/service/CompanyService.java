package com.company.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.company.entity.Company;
import com.company.mappper.CompanyMapper;
import com.company.model.CompanyModel;
import com.company.repository.CompanyRepository;

@Service
public class CompanyService {
	@Autowired
	CompanyRepository companyRepository;
	
	
	////@Autowired
	//RestTemplate restTemplate;

	@Autowired
	private CompanyMapper companyMapper;

	

	public List<Company> getCompanyDetails() {
		
		return companyRepository.findAll();

	}

	/*
	 * public Optional<Company> findById(String company) { Optional<Company>
	 * companyId =companyRepository.findById(company); if(!companyId.isPresent())
	 * return null;
	 * 
	 * ModelMapper mapper = new ModelMapper(); CompanyModel companyDto =
	 * mapper.map(Company.class, CompanyModel.class); List<StockModel> stockId=
	 * Arrays.asList( mapper.map(Stock[].class, StockModel[].class));
	 * companyDto.setStock(stockId);
	 * System.out.println("value of stocks id "+stockId);
	 * System.out.println("value of Company id "+companyDto);
	 * 
	 * return companyId;
	 * 
	 * 
	 * }
	 */

	public Company addCompany(Company companyDto) 
	{
		return companyRepository.save(companyDto);
	}
	public Company editCompany(Company companyDto) 
	{
		return companyRepository.save(companyDto);
	}
	public void deleteCompany(String companyCode) {
		companyRepository.deleteById(companyCode);
	}

	public Company getStock(String companyCode) {
		Company company = companyRepository.findById(companyCode).get();
	
		return company;
		  
	}
	
	
	/*public Company getdetails()
	{
		Company company = new Company();
		List<CompanyModel> model= companyMapper.toCompanyDtos(companyRepository.findAll());
		for(CompanyModel companymodel :model)
		{
			ResponseEntity<CompanyModel> res = this.restTemplate.getForEntity("http://localhost:8082/get", CompanyModel.class);
		}*/
	
	
	
	
	
}