import { Component, OnInit } from '@angular/core';
import { WorkoutSession } from '../../models/workout-session';
import { WorkoutSessionService } from '../../services/workout-session.service';
import { WorkoutTypeService } from '../../services/workout-type.service';
import { WorkoutType } from '../../models/workout-type';
import { Router } from '@angular/router';


@Component({
  selector: 'app-workout-session-list',
  standalone: false,
  templateUrl: './workout-session-list.component.html',
  styleUrl: './workout-session-list.component.scss'
})
export class WorkoutSessionListComponent implements OnInit {
  
  sessions: WorkoutSession[] = [];
  workoutTypes: WorkoutType[] = [];

  constructor(
    private sesssionService: WorkoutSessionService,
    private workoutTypeService: WorkoutTypeService,
    private router: Router
  ) {}
  
  
  ngOnInit(): void {
    this.sessions = this.sesssionService.getAll().sort((a, b) => b.id - a.id);
    this.workoutTypes = this.workoutTypeService.getAll();
  }

  getWorkoutTypeName(id: number): string {
  return this.workoutTypeService.getNameById(id);
  }

  editSession(id: number): void {
  this.router.navigate(['/sessions/edit', id]);
  }

  deleteSession(id: number): void {
    this.sesssionService.delete(id);
    this.sessions = this.sesssionService.getAll(); 
  }



}
  


  


  