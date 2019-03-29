import { Component, OnInit } from '@angular/core';
import { CandidatsService } from 'src/services/candidats.service';
import { Candidat } from '../../model/model.candidat';
@Component({
  selector: 'app-candidat-profil',
  templateUrl: './candidat-profil.component.html',
  styleUrls: ['./candidat-profil.component.css']
})
export class CandidatProfilComponent implements OnInit {

  candidat:Candidat=new Candidat();

  /** 
   etat:
   0:not processed,
   1:Inprogress,
   2:processed,
   3:failed
  **/
  candidatStatus:any[]=[
    { "status":"skypeInterview", "etat":0 },
    { "status":"reviewSkypeInterview", "etat":0 },
    { "status":"sendingChallenge", "etat":0 },
    { "status":"reviewChallenge", "etat":0 },
    { "status":"secondInterview", "etat":0 },
    { "status":"rejected", "etat":0 },
    { "status":"hired", "etat":0 }
  ]

  constructor(private candidatsService:CandidatsService ) { }

  ngOnInit() {
  	this.candidatsService.getCandidatByusername()
  	 .subscribe((data:any)=>{
      this.candidat=data;
      this.activateStatus();
    },err=>{
      console.log(err)
    });

  }

  getClass(etat){

    switch(etat){
      case 0: return "notProcessed";
      case 1: return "inProgress";
      case 2: return "processed";
      case 3: return "faild";
    }
  }

  activateStatus(){

    if(this.candidat.status=="rejected"){
      for(let c of this.candidatStatus){
        c.etat=3;
      }
    }
    else{
      for(let c of this.candidatStatus){
        if(c.status == this.candidat.status){
        c.etat=1;
        let index=this.candidatStatus.indexOf(c);
        for(let i=0; i<index;i++){
          this.candidatStatus[i].etat=2;
        }
      }
    }
    }
    
  }

}
