package org.expertus.web;

import java.util.List;
import java.util.Optional;

import org.expertus.dao.CandidatRepository;
import org.expertus.entities.Candidat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CandidatRestService {

	@Autowired
	private CandidatRepository candidatRepository;
	
	@RequestMapping(value="/candidats", method=RequestMethod.GET)
	public List<Candidat> getCandidats(){
		return candidatRepository.findAll();
	}
	
	@RequestMapping(value="/candidats/{id}", method=RequestMethod.GET)
	public Optional<Candidat> getCandidat(@PathVariable Long id) {
		return candidatRepository.findById(id);
		
	}
	
	@SuppressWarnings("deprecation")
	@RequestMapping(value="/chercherCandidats", method=RequestMethod.GET)
	public Page<Candidat> chercher(
			@RequestParam(name="mc", defaultValue="") String mc, 
			@RequestParam(name="page", defaultValue="0")int page, 
			@RequestParam(name="size", defaultValue="5")int size){
		return candidatRepository.chercher("%"+mc+"%", new PageRequest(page, size));
	}
	
	@RequestMapping(value="/candidats", method=RequestMethod.POST)
	public Candidat save(@RequestBody Candidat c) {
		return candidatRepository.save(c);
	}
	
	@RequestMapping(value="/candidats/{id}", method=RequestMethod.DELETE)
	public void supprimer(@PathVariable Long id) {
		candidatRepository.deleteById(id); 
		
	}
	
	@RequestMapping(value="/candidats/{id}", method=RequestMethod.PUT)
	public Candidat modifier(@PathVariable Long id, @RequestBody Candidat c) {
		c.setId(id);
		return candidatRepository.save(c);
	}
}
