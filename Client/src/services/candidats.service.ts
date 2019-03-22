import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CandidatsService {

  constructor(public http:HttpClient) { }

	getCandidats(motCle:string, page:number, size:number){

		return this.http.get('http://localhost:8080/chercherCandidats?mc='+motCle+'&& size='+size+'&& page='+page);
	}
}
