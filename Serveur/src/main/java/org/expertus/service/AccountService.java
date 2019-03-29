package org.expertus.service;

import org.expertus.entities.AppRole;
import org.expertus.entities.AppUser;

public interface AccountService {

	 public AppUser saveUser(AppUser user);
	 public AppRole saveRole(AppRole role);
	 public AppUser loadUserByUsername(String username);
	 public void addRoleToUser(String username,String rolename);
	 public void deleteUser(Long id);
}
