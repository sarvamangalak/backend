package com.stock.service;

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
	
	public Stock findById(String stockCode)
	{
		Optional<Stock> stockId =stockRepository.findById(stockCode);
		if(!stockId.isPresent())
			return null;
		return stockId.get();
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
