package org.expertus;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import org.expertus.dao.CandidatRepository;
import org.expertus.entities.AppRole;
import org.expertus.entities.AppUser;
import org.expertus.entities.Candidat;
import org.expertus.entities.CandidatStatus;
import org.expertus.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class CandidatureBackendApplication implements CommandLineRunner{
	
	@Autowired
	private CandidatRepository candidatRepository;
	
	@Autowired
	private AccountService accountService;
	public static void main(String[] args) {
		SpringApplication.run(CandidatureBackendApplication.class, args);
	}
	
	@Bean
    BCryptPasswordEncoder getBCPE(){
        return new BCryptPasswordEncoder();
    }

	@Override
	public void run(String... args) throws Exception {
		DateFormat df= new SimpleDateFormat("dd/MM/yyyy");
		
		AppUser a =new AppUser("candidat1","1234");
		Candidat cc = new Candidat("KADER", "HIND", df.parse("25/07/1993"), "hindkader@gmail.com", "+212678583629","Developpeur Java",CandidatStatus.hired);
		a.setCandidat(cc);
		cc.setAppUser(a);
		AppUser admin =new AppUser("admin","1234");
		candidatRepository.save(cc);
		accountService.saveUser(a);
		 a =new AppUser("candidat2","1234");
		 cc = new Candidat("MENDADA", "MOUNA", df.parse("25/07/1993"), "mounamendada@gmail.com", "+212678583629","Developpeur .NET",CandidatStatus.reviewChallenge);
		 a.setCandidat(cc);
		 cc.setAppUser(a);
		 candidatRepository.save(cc);
		 accountService.saveUser(a);
		
		 a =new AppUser("candidat3","1234");
		 cc = new Candidat("SALMA", "Mezouar", df.parse("25/07/1993"), "salmameezouar@gmail.com", "+212678583629","Developpeur Python",CandidatStatus.reviewSkypeInterview);
		 a.setCandidat(cc);
		 cc.setAppUser(a);
		 candidatRepository.save(cc);
	     accountService.saveUser(a);
	     
		 a =new AppUser("candidat4","1234");
		 cc = new Candidat("Jamila", "Jalil", df.parse("25/07/1993"), "jamilaJalil@gmail.com", "+212678583629","Developpeur JavScript",CandidatStatus.rejected);
		 a.setCandidat(cc);
		 cc.setAppUser(a);
		 candidatRepository.save(cc);
		 accountService.saveUser(a);
		 
		 a =new AppUser("candidat5","1234");
		 cc = new Candidat("Souhail", "Lhajoui", df.parse("25/07/1993"), "souhailLhajoui@gmail.com", "+212678583629","Devops",CandidatStatus.secondInterview);
		 a.setCandidat(cc);
		 cc.setAppUser(a);
		 candidatRepository.save(cc);
		 accountService.saveUser(a);
		 
		 a =new AppUser("candidat6","1234");
		 cc = new Candidat("Khadija", "Fadel", df.parse("25/07/1993"), "KhadijaFadel@gmail.com", "+212678583629","Testeur",CandidatStatus.sendingChallenge);
		 a.setCandidat(cc);
		 cc.setAppUser(a);
		 candidatRepository.save(cc);
		 accountService.saveUser(a);
		 
		 a =new AppUser("candidat7","1234");
		 cc = new Candidat("Hamza", "Arrad", df.parse("25/07/1993"), "hamzaArrad@gmail.com", "+212678583629","Developpeur PLSQL",CandidatStatus.hired);
		 a.setCandidat(cc);
		 cc.setAppUser(a);
		candidatRepository.save(cc);
		accountService.saveUser(a);
		
		candidatRepository.findAll().forEach(c->{
			System.out.println(c.getNom());
			System.out.println(c.getStatus());
		});
		
		accountService.saveRole(new AppRole(null,"CANDIDAT"));
		accountService.saveRole(new AppRole(null,"ADMIN"));
		
		accountService.saveUser(admin);
		
		accountService.addRoleToUser("candidat1", "CANDIDAT");
		accountService.addRoleToUser("candidat2", "CANDIDAT");
		accountService.addRoleToUser("candidat3", "CANDIDAT");
		accountService.addRoleToUser("candidat4", "CANDIDAT");
		accountService.addRoleToUser("candidat5", "CANDIDAT");
		accountService.addRoleToUser("candidat6", "CANDIDAT");
		accountService.addRoleToUser("candidat7", "CANDIDAT");
		accountService.addRoleToUser("admin", "ADMIN");

		


	}

}
