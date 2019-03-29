import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private mode=0;

  constructor(private authentificationService:AuthentificationService, private router:Router) { }

  ngOnInit() {

  }

  onLogin(data){
  	this.authentificationService.login(data).subscribe(resp =>{
  		let jwtToken=resp.headers.get('Authorization');
      console.log("++++++++jwtToken: "+jwtToken);
  		this.authentificationService.saveToken(jwtToken);

      if(this.authentificationService.isAdmin())
        this.router.navigateByUrl("candidats");
      else
        this.router.navigateByUrl("profil-candidat");
      console.log(jwtToken);
  	}, err=>{
  		this.mode=1;
  	});
  }
}
