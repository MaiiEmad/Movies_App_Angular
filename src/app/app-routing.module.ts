import { AuthGuard } from './auth.guard';
import { NetworkComponent } from './network/network.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:"", redirectTo:"register" ,pathMatch:"full"},
  {path:"home", canActivate:[AuthGuard] ,component:HomeComponent},
  {path:"movies", canActivate:[AuthGuard] ,component:MoviesComponent},
  {path:"about",canActivate:[AuthGuard],component:AboutComponent},
  {path:"tv",canActivate:[AuthGuard],component:TvComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"people",canActivate:[AuthGuard],component:PeopleComponent},
  {path:"network",component:NetworkComponent},
  {path:"**",component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
