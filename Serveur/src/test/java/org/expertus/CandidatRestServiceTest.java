package org.expertus;

import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.expertus.dao.AppUserRepository;
import org.expertus.dao.CandidatRepository;
import org.expertus.entities.AppUser;
import org.expertus.entities.Candidat;
import org.expertus.entities.CandidatStatus;
import org.expertus.service.AccountService;
import org.expertus.web.CandidatRestService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(SpringRunner.class)
@WebAppConfiguration
public class CandidatRestServiceTest {
	
	private MockMvc mockMvc;
	
	@InjectMocks
	private CandidatRestService candidatRestService;
	
	@Mock
	private CandidatRepository candidatRepository;
	
	@Mock
	private AppUserRepository appUserRepository;
	@Mock
	private AccountService accountService;
	
	private DateFormat df= new SimpleDateFormat("dd/MM/yyyy");
	@Before
	public void init() {
		mockMvc = MockMvcBuilders.standaloneSetup(candidatRestService).build();
	}
	
	@Test
	public void getAllCandidatsTest() throws Exception {
		List<Candidat> list=new ArrayList<Candidat>();
		
		Candidat candidat1 = new Candidat((long) 1,"sara", "sara", df.parse("25/07/1993"), "sara@gmail.com", "+212678583629","Developpeur Java",CandidatStatus.hired);	
		Candidat candidat2 = new Candidat((long) 2,"soumaia", "soumaia", df.parse("25/07/1993"), "soumaia@gmail.com", "+212678583629","Developpeur Java",CandidatStatus.hired);		
		Candidat candidat3 = new Candidat((long) 3,"ahmed", "ahmed", df.parse("25/07/1993"), "ahmed@gmail.com", "+212678583629","Developpeur Java",CandidatStatus.hired);
		
		list.add(candidat1);
		list.add(candidat2);
		list.add(candidat3);
		
		when(candidatRepository.findAll()).thenReturn(list);
		
		mockMvc.perform(get("/candidats").accept(MediaType.APPLICATION_JSON))
		        .andExpect(status().isOk())
		        .andExpect(jsonPath("$", hasSize(3)))
		        .andExpect(jsonPath("$[0].id", is(1)))
		        .andExpect(jsonPath("$[0].nom", is("sara")))
		        .andExpect(jsonPath("$[1].id", is(2)))
		        .andExpect(jsonPath("$[1].prenom", is("soumaia")))
		        .andDo(print());
		
		verify(candidatRepository,times(1)).findAll();
		verifyNoMoreInteractions(candidatRepository);

	}
	
	@Test
	public void getCandidatByIdTest() throws Exception {
	   Candidat candidat = new Candidat((long) 1,"sara", "sara", df.parse("25/07/1993"), "sara@gmail.com", "+212678583629","Developpeur Java",CandidatStatus.hired);		
		when(candidatRepository.findById((long) 1)).thenReturn(Optional.of(candidat));
		mockMvc.perform(get("/candidats/{id}",1).accept(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.id", is(1)))
				.andDo(print());
		
		verify(candidatRepository,times(1)).findById((long) 1);
		verifyNoMoreInteractions(candidatRepository);
	}

	@Test
	public void deleteCandidatTest() throws Exception{
		   Candidat candidat = new Candidat((long) 1,"sara", "sara", df.parse("25/07/1993"), "sara@gmail.com", "+212678583629","Developpeur Java",CandidatStatus.hired);		
		   doNothing().when(candidatRepository).deleteById(candidat.getId());
		   mockMvc.perform(delete("/candidats/{id}",candidat.getId()))
			.andExpect(status().isOk());
			verify(candidatRepository,times(1)).deleteById(candidat.getId());
			verifyNoMoreInteractions(candidatRepository);
		   
	}
	
}
