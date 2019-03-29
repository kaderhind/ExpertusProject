# ExpertusProject

La présente application a pour but le suivi des candidatures de divers candidats, elle est composée de deux parties:

#La partie Admin:
  - L'admin peut se connecter à l'application avec : username: admin, mot de passe: 1234
  - L'admin peut voir la liste des candidats et leurs status
  - L'admin peut modifier ou supprimer les données d'un candidat
  - L'admin peut ajouter un nouveau candidat, les nouveaux candidats ajoutés auront comme username: nom+prenom et mot de passe: 1234
  
#La partie Candidat:
  - Le candidat peut se connecter à l'application via son username et son mot de passe (on suppose que le username et mot de passe lui    sont envoyé à lui par mail)
  - Le candidat peut voir l'etape courante de sa candidature 
  
   # Technologies
   
  partie serveur: 
   -  Spring boot
   -  Spring security
   -  H2 dataBase 
   -  Mockito && Junit
   
  partie Client:
  - Angular 7
  - HTML
  - CSS
  - SVG
  - Bootstrap
  
  # Installation
  
  pour installer cette application, lancer les commandes suivantes: 
  
    https://github.com/kaderhind/ExpertusProject.git
    cd ExpertusProject
    
  pour exécuter la partie serveur, cd au dossier Serveur puis lancer la commande suivante:
  
    ./mvnw spring-boot:run
    
   pour exécuter la partie client, cd au dossier Client puis lancer la commande suivante:
   
    npm install && npm start
 
# Jeu de données
  - Admin: username: admin, mot de passe: 1234
  - Candidat accepté: username: candidat1, mot de passe: 1234
  - Revue de challenge:  username: candidat2, mot de passe: 1234
  - Revue d'entretien Skype: username: candidat3, mot de passe: 1234
  - Candidat rejeté: username: candidat4, mot de passe: 1234
  - 2 em rencontre: username: candidat5, mot de passe: 1234
  - Défi envoyé: username: candidat6, mot de passe: 1234
  
    
  
  
  
