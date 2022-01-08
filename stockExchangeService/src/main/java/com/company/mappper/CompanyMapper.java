package com.company.mappper;

import org.springframework.stereotype.Component;

import com.company.entity.Company;
import com.company.model.CompanyModel;

import java.util.Arrays;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
@Component
public class CompanyMapper {
	
	public Company toCompanyDto(CompanyModel model)
	{
		
		ModelMapper mapper = new ModelMapper();
		
		mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		Company companyDto = mapper.map(model, Company.class);
		return companyDto;
	}
	
	public CompanyModel toCompany(Company companyDto) 
	{
		ModelMapper mapper = new ModelMapper();
		mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		CompanyModel company = mapper.map(companyDto, CompanyModel.class);
		return company;
	}
	
	public List<CompanyModel> toCompanyDtos(List<Company> companies)
	{
		ModelMapper mapper = new ModelMapper();
		mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		List<CompanyModel> companyDtos = Arrays.asList(mapper.map(companies, CompanyModel[].class));
		return companyDtos;
	}
}
