import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authentificationService:AuthentificationService) { }

  ngOnInit() {
  }

  onLogin(data){
  	this.authentificationService.login(data).subscribe(resp =>{
  		let jwtToken=resp.headers.get('Authorization');
  		this.authentificationService.saveToken(jwtToken);
      console.log(jwtToken);
  	}, err=>{
  		console.log(err);
  	});
  }
}
