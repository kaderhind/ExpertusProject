import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService  } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

	private host: string='http://localhost:8080';
	private jwtToken: string;
	private roles:Array<any>=[];
  username: string;
  	constructor(private http:HttpClient) { }

  	login(data){
  		return this.http.post(this.host+"/login",data, {observe:'response'});
  	}

  	saveToken(jwtToken: string){

  		this.jwtToken = jwtToken;
  		localStorage.setItem('token',jwtToken);
  		this.parseJWT();
  	}

    parseJWT(){
        let jwtHelper = new JwtHelperService();
        let jwtObject = jwtHelper.decodeToken(this.jwtToken);
        this.username = jwtObject.sub;
        this.roles = jwtObject.roles;
    }

    isAdmin(){
      return this.roles.indexOf('ADMIN') >=0;
    }

    isCandidat(){
      return this.roles.indexOf('CANDIDAT') >=0;
    }

    isAuthenticated(){
      return this.roles!=undefined;
    }

    loadToken(){
      this.jwtToken=localStorage.getItem('token');
      this.parseJWT();
    }

    logOut(){
      localStorage.removeItem('token');
      this.initParams();
    }

    initParams(){
      this.jwtToken=undefined;
      this.roles=undefined;
      this.username=undefined;
    }

}
