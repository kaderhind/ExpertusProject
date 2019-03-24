package org.expertus.web;

import lombok.Data;

import javax.management.RuntimeErrorException;

import org.expertus.entities.AppUser;
import org.expertus.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
	
	@Autowired
    private AccountService accountService;
//    @PostMapping("/register")
//    public AppUser register(@RequestBody  UserForm userForm){
//        return  accountService.saveUser(
//                userForm.getUsername(),userForm.getPassword(),userForm.getConfirmedPassword());
//    }

    @PostMapping("/register")
    public AppUser signUp(@RequestBody RegistrationForm data) {
    	String username=data.getUsername();
    	AppUser user=accountService.loadUserByUsername(username);
    	if(user != null) throw new RuntimeException("This user already exist");
    	String password=data.getPassword();
    	String repassword=data.getRepassword();
    	if(!password.equals(repassword))
    		throw new RuntimeException("you must confirm your pssword");
    	AppUser u=new AppUser();
    	u.setUsername(username);
    	u.setPassword(password);
    
    	accountService.saveUser(u);
    	accountService.addRoleToUser(username, "CANDIDAT");
    	return u;
    	
    }
}

@Data
class UserForm{
    private String username;
    private String password;
    private String confirmedPassword;
    
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getConfirmedPassword() {
		return confirmedPassword;
	}
	public void setConfirmedPassword(String confirmedPassword) {
		this.confirmedPassword = confirmedPassword;
	}
	
}
