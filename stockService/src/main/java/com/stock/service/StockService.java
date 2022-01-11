package com.stock.service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stock.model.Stock;
import com.stock.repository.StockRepository;


@Service
public class StockService {
	@Autowired
	StockRepository stockRepository;
	
	public List<Stock> getStockDetails(){
		return stockRepository.findAll();
		
	}
	
	public List<Stock> findByCompanyCode(String companyCode)
	{
		List<Stock> stockId =stockRepository.findByCompanyCode(companyCode);
		
		return stockId;
	}
	
	public List<Stock> findByDate(String companyCode,LocalDate from ,LocalDate to)
	{
		List<Stock> stockId =stockRepository.findByDate(companyCode,from,to);
		
		return stockId;
	}
	
	public Stock addstock(Stock stock)
	{
		Stock stockDetails =stockRepository.save(stock);
		return stockDetails;
	}
	
	public Stock editstock(Stock stock)
	{
		return stockRepository.save(stock);
	}
	
	public void deletestock(String stockCode)
	{
		 stockRepository.deleteById(stockCode);
	}
	
	
}
