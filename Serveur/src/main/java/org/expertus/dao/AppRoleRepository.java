package org.expertus.dao;

import org.expertus.entities.AppRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface AppRoleRepository extends JpaRepository<AppRole,Long> {
	 public AppRole findByRoleName(String roleName);
	 public void TestFunction();
	 
}
