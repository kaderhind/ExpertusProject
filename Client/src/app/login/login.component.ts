import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authentificationService:AuthentificationService, private router:Router) { }

  ngOnInit() {
  }

  onLogin(data){
  	this.authentificationService.login(data).subscribe(resp =>{
  		let jwtToken=resp.headers.get('Authorization');
  		this.authentificationService.saveToken(jwtToken);
      if(this.authentificationService.isAdmin())
        this.router.navigateByUrl("candidats");
      else
        this.router.navigateByUrl("about");
      console.log(jwtToken);
  	}, err=>{
  		console.log(err);
  	});
  }
}
