import { Component, OnInit } from '@angular/core';
import { WorkoutSession } from '../../models/workout-session';
import { WorkoutSessionService } from '../../services/workout-session.service';
import { WorkoutTypeService } from '../../services/workout-type.service';
import { WorkoutType } from '../../models/workout-type';


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
    private workoutTypeService: WorkoutTypeService
  ) {}
  
  
  ngOnInit(): void {
    this.sessions = this.sesssionService.getAll();
    this.workoutTypes = this.workoutTypeService.getAll();
  }

  getWorkoutTypeName(id: number): string {
  return this.workoutTypeService.getNameById(id);
}
}
  


  


  