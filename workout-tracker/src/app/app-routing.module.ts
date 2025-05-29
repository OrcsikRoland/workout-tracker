import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutSessionListComponent } from './pages/workout-session-list/workout-session-list.component';
import { HomeComponent } from './pages/home/home.component';
import { WorkoutSessionFormComponent } from './pages/workout-session-form/workout-session-form.component';
import { WorkoutTypeListComponent } from './pages/workout-type-list/workout-type-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sessions', component: WorkoutSessionListComponent },
  { path: 'sessions/new', component: WorkoutSessionFormComponent},
  { path: 'sessions/edit/:id', component: WorkoutSessionFormComponent},
  { path: 'types', component: WorkoutTypeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
