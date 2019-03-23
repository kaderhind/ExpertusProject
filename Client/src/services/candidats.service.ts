import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Candidat } from 'src/model/model.candidat';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CandidatsService {

  constructor(public http:HttpClient) { }

	getCandidats(motCle:string, page:number, size:number){

		return this.http.get('http://localhost:8080/chercherCandidats?mc='+motCle+'&size='+size+'&page='+page);
	}

	saveCandidat(candidat:Candidat){
		return this.http.post("http://localhost:8080/candidats",candidat);
	}

	updateCandidat(candidat:Candidat){
		return this.http.put("http://localhost:8080/candidats/"+candidat.id,candidat);
	}

	deleteCandidat(id:number){
		return this.http.delete("http://localhost:8080/candidats/"+id);
	}

	getCandidat(id:number):Observable<any>{
		return this.http.get("http://localhost:8080/candidats/"+id);
	}

	
}

