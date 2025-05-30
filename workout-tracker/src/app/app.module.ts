import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WorkoutSessionListComponent } from './pages/workout-session-list/workout-session-list.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WorkoutSessionFormComponent } from './pages/workout-session-form/workout-session-form.component';
import { FormsModule } from '@angular/forms';
import { WorkoutTypeListComponent } from './pages/workout-type-list/workout-type-list.component';
import { StatsComponent } from './pages/stats/stats.component';





@NgModule({
  declarations: [
    AppComponent,
    WorkoutSessionListComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    WorkoutSessionFormComponent,
    WorkoutTypeListComponent,
    StatsComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
