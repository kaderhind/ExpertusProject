import { Component, OnInit } from '@angular/core';
import { Candidat } from '../../model/model.candidat';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatsService } from '../../services/candidats.service';

@Component({
  selector: 'app-edit-candidat',
  templateUrl: './edit-candidat.component.html',
  styleUrls: ['./edit-candidat.component.css']
})
export class EditCandidatComponent implements OnInit {

	mode:number=1;
	candidat:Candidat=new Candidat();
	id:number;
	
	CadidatStatus=['skypeInterview',
				   'reviewSkypeInterview',
				   'sendingChallenge',
				   'reviewChallenge',
				   'secondInterview',
				   'rejected','hired'];

	constructor(private activatedRoute:ActivatedRoute, 
				private router:Router, 
				private candidatsService:CandidatsService) { }

	ngOnInit() {

		this.id=this.activatedRoute.snapshot.params['id'];
		this.candidatsService.getCandidat(this.id)
		.subscribe(data=>{
			this.candidat=data
		},err=>{
			console.log(err);
		});
	  }


	updateCandidat(){
		this.candidatsService.updateCandidat(this.candidat)
		.subscribe(data=>{
			alert("Mise a jour effectues avec succes");
			this.router.navigate(['candidats']);
		},err=>{
			console.log(err);
		})

	}

}
