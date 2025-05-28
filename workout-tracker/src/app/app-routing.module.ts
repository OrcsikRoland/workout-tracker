import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutSessionListComponent } from './pages/workout-session-list/workout-session-list.component';

const routes: Routes = [
  {path: 'sessions', component: WorkoutSessionListComponent},
  {path: '', redirectTo: 'sessions', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
