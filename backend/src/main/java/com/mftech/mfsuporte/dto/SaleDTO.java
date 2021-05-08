package com.mftech.mfsuporte.dto;

import java.time.LocalDate;

import com.mftech.mfsuporte.entities.Sale;

public class SaleDTO {
	
	private Long id;
	private Integer visited; //visitados
	private Integer deals;  // negocios fechados
	private Double amount;  // quantia vendida
	private LocalDate date; //ctrl+shift+O para importar LocalDate
	
	private SellerDTO saller;
	
	public SaleDTO() {
	}

	public SaleDTO(Long id, Integer visited, Integer deals, Double amount, LocalDate date, SellerDTO saller) {
		this.id = id;
		this.visited = visited;
		this.deals = deals;
		this.amount = amount;
		this.date = date;
		this.saller = saller;
	}
	
	public SaleDTO(Sale entity) {
		id = entity.getId();
		visited = entity.getVisited();
		deals = entity.getDeals();
		amount = entity.getAmount();
		date = entity.getDate();
		saller = new SellerDTO(entity.getSeller());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getVisited() {
		return visited;
	}

	public void setVisited(Integer visited) {
		this.visited = visited;
	}

	public Integer getDeals() {
		return deals;
	}

	public void setDeals(Integer deals) {
		this.deals = deals;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public SellerDTO getSaller() {
		return saller;
	}

	public void setSaller(SellerDTO saller) {
		this.saller = saller;
	}
}
