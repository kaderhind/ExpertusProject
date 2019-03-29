import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


   

  constructor(private authentificationService:AuthentificationService, private router:Router ){}

  ngOnInit() {
   //	this.authentificationService.loadToken();
  }
  
  isAdmin(){
    return this.authentificationService.isAdmin();
  }

  isCandidat(){
    return this.authentificationService.isCandidat();
  }

  isAuthenticated(){
  	return this.authentificationService.isAuthenticated();
  }

  logOut(){
  	 this.authentificationService.logOut();
  	 return this.router.navigateByUrl("login");

  }

}
