import { Component, OnInit } from '@angular/core';
import { Candidat } from '../../model/model.candidat';
import { CandidatsService } from '../../services/candidats.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-candidat',
  templateUrl: './new-candidat.component.html',
  styleUrls: ['./new-candidat.component.css']
})
export class NewCandidatComponent implements OnInit {

  candidat:Candidat=new Candidat();

  CandidatStatus:any[]=[
    { "status":"skypeInterview", "name":"Rencontre Skype" },
    { "status":"reviewSkypeInterview","name":"Revue en interne"},
    { "status":"sendingChallenge","name":"Envoi du défi" },
    { "status":"reviewChallenge", "name":"Revue du défi" },
    { "status":"secondInterview", "name":"2em Rencontre" },
    { "status":"rejected", "name":"Rejeté"},
    { "status":"hired", "name":"Accepté" }
  ]

  mode:number=1;
  constructor(public candidatsService: CandidatsService, public router:Router) { }

  ngOnInit() {
  }

  saveCandidat(){
  	this.candidatsService.saveCandidat(this.candidat)
  	.subscribe((data:Candidat)=>{
  		this.candidat=data;
  		this.mode=2;
  	},err=>{
  		console.log(err);
  	});
  }

  reset(){
    this.candidat=null;
    this.mode=1;
    this.router.navigate(['candidats']);
  }

}
