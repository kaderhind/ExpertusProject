package org.expertus;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import org.expertus.dao.CandidatRepository;
import org.expertus.entities.Candidat;
import org.expertus.entities.CandidatStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CandidatureBackendApplication implements CommandLineRunner{
	
	@Autowired
	private CandidatRepository candidatRepository;
	public static void main(String[] args) {
		SpringApplication.run(CandidatureBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		DateFormat df= new SimpleDateFormat("dd/MM/yyyy");
		candidatRepository.save(new Candidat("KADER", "HIND", df.parse("25/07/1993"), "hindkader@gmail.com", "+212678583629",CandidatStatus.hired));
		candidatRepository.save(new Candidat("MENDADA", "MOUNA", df.parse("25/07/1993"), "mounamendada@gmail.com", "+212678583629",CandidatStatus.reviewChallenge));
		candidatRepository.save(new Candidat("SALMA", "Mezouar", df.parse("25/07/1993"), "salmameezouar@gmail.com", "+212678583629",CandidatStatus.reviewSkypeInterview));
		candidatRepository.findAll().forEach(c->{
			System.out.println(c.getNom());
			System.out.println(c.getStatus());
		});
		

	}

}
