package com.company.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.company.entity.Stock;

@Repository
public interface StockRepos extends MongoRepository<Stock, String> {

	public List<Stock> findByCompanyCode(String companyCode);
}
