import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesDetailsComponent } from './moviesDetails/moviesDetails.component';
import { TvComponent } from './tv/tv.component';

@NgModule({
  declarations: [						
    AppComponent,
      HomeComponent,
      LoginComponent,
      RegisterComponent,
      NavbarComponent,
      AboutComponent,
      MoviesComponent,
      MoviesDetailsComponent,
      TvComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
