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
  constructor(private candidatsService:CandidatsService ) { }

  ngOnInit() {
  	this.candidatsService.getCandidatByusername()
  	 .subscribe((data:any)=>{
      this.candidat=data;
    },err=>{
      console.log(err)
    });

  }

}
