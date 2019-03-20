package org.expertus.dao;


import org.expertus.entities.Candidat;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CandidatRepository extends JpaRepository<Candidat, Long> {
	@Query("select c from Candidat c where c.nom like :x")
	public Page<Candidat> chercher(@Param("x")String mc, Pageable pageable);

}
