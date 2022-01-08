package com.company.repository;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.company.entity.Company;


@Repository
public interface CompanyRepository extends MongoRepository<Company, String> {	
	              
	                
                    	 
}