import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CandidatsService } from 'src/services/candidats.service';
import { Router } from '@angular/router';
import { Candidat } from '../../model/model.candidat';



@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.css']
})


export class CandidatsComponent implements OnInit {

	pageCandidats;
  motCle:string="";
  currentPage:number=0;
  size:number=5;
  pages:Array<number>;

  constructor(public http:HttpClient, public candidatsService:CandidatsService,
    public router:Router) { }

  ngOnInit() {	
    this.candidatsService.getCandidats(this.motCle,this.currentPage,this.size)
    .subscribe((data:any)=>{
      this.pageCandidats=data;
      this.pages=new Array(data.totalPages);
      console.log(this.pages);
    },err=>{
      console.log(err)
    });
  }

  doSearch(){

    this.candidatsService.getCandidats(this.motCle,this.currentPage,this.size)
    .subscribe((data:any)=>{
      this.pageCandidats=data;
      this.pages=new Array(data.totalPages);
    },err=>{
      console.log(err)
    });
  }

  chercher(){
    this.doSearch();
  }

  gotoPage(i:number){
    this.currentPage=i;
    this.doSearch();
  }

  onEditCandidat(id:number){

    this.router.navigate(['editCandidat',id]);

  }

  onDeleteCandidat(c:Candidat){

    let confirm=window.confirm(" Est vous sure ?");

    if(confirm == true){
      
      this.candidatsService.deleteCandidat(c.id)
      .subscribe(data=>{
      this.pageCandidats.content.splice(
        this.pageCandidats.content.indexOf(c),1);
    },err=>{
      console.log(err);
    })

    }
  }

  getClass(status:string){

    switch(status){
      case 'hired' : return 'label label-success';
      case 'rejected': return 'label label-danger';
      default : return 'label label-default';
    }

  }
}
