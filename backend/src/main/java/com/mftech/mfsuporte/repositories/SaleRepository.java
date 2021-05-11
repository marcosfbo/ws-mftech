package com.mftech.mfsuporte.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mftech.mfsuporte.dto.SaleSuccessDTO;
import com.mftech.mfsuporte.dto.SaleSumDTO;
import com.mftech.mfsuporte.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {
	
	@Query("SELECT new com.mftech.mfsuporte.dto.SaleSumDTO (obj.seller, SUM(obj.amount)) "
			+ " FROM Sale AS obj GROUP BY obj.seller")//obj = apelido para cada objeto seller que trás do banco.
	List<SaleSumDTO> amountGroupedBySeller();
	
	@Query("SELECT new com.mftech.mfsuporte.dto.SaleSuccessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals)) "
			+ " FROM Sale AS obj GROUP BY obj.seller")//obj = apelido para cada objeto seller que trás do banco.
	List<SaleSuccessDTO> successGroupedBySeller(); // Sucesso agrupado por vendedor
}
