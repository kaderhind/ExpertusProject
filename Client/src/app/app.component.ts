import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'candidatureClient';
  candidat={nom:'hind', email:'hindkader@gmail.com'};

   ngOnInit() {
   	
  }

  constructor(private authentificationService:AuthentificationService ){}

  isAdmin(){
    return this.authentificationService.isAdmin();
  }

  isCandidat(){
    return this.authentificationService.isCandidat();
  }
  isAuthenticated(){
  	return this.authentificationService.isAuthenticated();
  }

}
