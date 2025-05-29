import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutSessionListComponent } from './pages/workout-session-list/workout-session-list.component';
import { HomeComponent } from './pages/home/home.component';
import { WorkoutSessionFormComponent } from './pages/workout-session-form/workout-session-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sessions', component: WorkoutSessionListComponent },
  { path: 'sessions/new', component: WorkoutSessionFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
