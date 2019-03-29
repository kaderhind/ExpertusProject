import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Candidat } from 'src/model/model.candidat';
import {Observable} from 'rxjs';
import {AuthentificationService} from './authentification.service';


@Injectable({
  providedIn: 'root'
})
export class CandidatsService {

	private host: string='http://localhost:8080';
	private jwtToken: string;
	private roles:Array<any>=[];

  constructor(private http:HttpClient, private authentificationService:AuthentificationService) { }

	getCandidats(motCle:string, page:number, size:number){

		let headers=new HttpHeaders();
		headers.append('authorization','Bearer '+this.authentificationService.jwtToken);
		return this.http.get(this.host+'/chercherCandidats?mc='+motCle+'&size='+size+'&page='+page,
							{headers:headers});
	}

	saveCandidat(candidat:Candidat){
		return this.http.post("http://localhost:8080/candidats",candidat);
	}

	updateCandidat(candidat:Candidat){
		return this.http.put("http://localhost:8080/candidats/"+candidat.id,candidat);
	}

	deleteCandidat(id:number){
		let headers=new HttpHeaders({'authorization':this.authentificationService.jwtToken});
		return this.http.delete("http://localhost:8080/candidats/"+id,{headers:headers});
	}

	getCandidat(id:number):Observable<any>{
		return this.http.get("http://localhost:8080/candidats/"+id);
	}

	getCandidatByusername(){
		return this.http.get("http://localhost:8080/candidatProfil/"+this.authentificationService.username);
	}


	
}

