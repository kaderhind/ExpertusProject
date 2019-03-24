import { Component, OnInit } from '@angular/core';
import { Candidat } from '../../model/model.candidat';
import { CandidatsService } from '../../services/candidats.service';

@Component({
  selector: 'app-new-candidat',
  templateUrl: './new-candidat.component.html',
  styleUrls: ['./new-candidat.component.css']
})
export class NewCandidatComponent implements OnInit {

  candidat:Candidat=new Candidat();
  CadidatStatus=['skypeInterview',
           'reviewSkypeInterview',
           'sendingChallenge',
           'reviewChallenge',
           'secondInterview',
           'rejected','hired'];

  mode:number=1;
  constructor(public candidatsService: CandidatsService) { }

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
  }

}
