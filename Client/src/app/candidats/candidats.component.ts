import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CandidatsService } from 'src/services/candidats.service';


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

  constructor(public http:HttpClient, public candidatsService:CandidatsService) { }

  ngOnInit() {
  	
  	/*this.http.get('http://localhost:8080/chercherCandidats?mc=M&&size=1&&page=0').subscribe(data=>{
  		this.pageCandidats=data;
  	},err=>{
  		console.log(err);
  	})*/
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

}
