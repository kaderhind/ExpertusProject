import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule} from '@angular/common/http';
import { NewCandidatComponent } from './new-candidat/new-candidat.component';
import { CandidatsService } from '../services/candidats.service';
import { EditCandidatComponent } from './edit-candidat/edit-candidat.component';
import { LoginComponent } from './login/login.component';
import { CandidatProfilComponent } from './candidat-profil/candidat-profil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'candidats', component: CandidatsComponent },
  { path: 'editCandidat/:id', component: EditCandidatComponent },
  { path: 'new-candidat', component: NewCandidatComponent},
  { path: 'profil-candidat', component: CandidatProfilComponent},
  { path: 'login', component: LoginComponent},
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }

];

@NgModule({
  declarations: [
    AppComponent,
    CandidatsComponent,
    AboutComponent,
    NewCandidatComponent,
    EditCandidatComponent,
    LoginComponent,
    CandidatProfilComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
   // AppRoutingModule
  ],
  providers: [CandidatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
