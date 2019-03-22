import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-candidat',
  templateUrl: './new-candidat.component.html',
  styleUrls: ['./new-candidat.component.css']
})
export class NewCandidatComponent implements OnInit {

  //candidat:Candidat=new Candidat();
  mode:number=1;
  constructor() { }

  ngOnInit() {
  }

   /*saveCandidat(){
  	this.candidatService.saveCandidat(this.candidat)
  	.subscribe(data=>{
  		this.candidat=data;
  		this.mode=2;
  	},err=>{
  		console.log(err);
  	});
  }*/


}
