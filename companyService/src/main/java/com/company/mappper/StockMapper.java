package com.company.mappper;

import java.util.Arrays;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Component;

import com.company.entity.Stock;
import com.company.model.StockModel;

@Component
public class StockMapper {
	
	public Stock toStockPriceDto(StockModel stockPrice)
	{
		ModelMapper mapper = new ModelMapper();
		mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		Stock stockPriceDto = mapper.map(stockPrice, Stock.class);
		return stockPriceDto;
	}
	
	public StockModel toStockPrice(String companyCode)
	{
		ModelMapper mapper = new ModelMapper();
		mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		StockModel stockPrice = mapper.map(companyCode, StockModel.class);
		return stockPrice;
	}
	
	public List<Stock> toStockPriceDtos(String companyCode)
	{
		ModelMapper mapper = new ModelMapper();
		mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		List<Stock> stockPriceDtos = Arrays.asList(mapper.map(StockModel[].class, Stock[].class));
		return stockPriceDtos;
	}
	
	
	public List<StockModel> toStockPriceDos(String companyCode)
	{
		ModelMapper mapper = new ModelMapper();
		mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
		List<StockModel> stockPriceDtos = Arrays.asList(mapper.map(Stock[].class, StockModel[].class));
		return stockPriceDtos;
	}
}
