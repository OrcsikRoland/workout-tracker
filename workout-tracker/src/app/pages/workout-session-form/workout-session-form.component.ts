import { Component, OnInit } from '@angular/core';
import { WorkoutSession } from '../../models/workout-session';
import { WorkoutSessionService } from '../../services/workout-session.service';
import { Router } from '@angular/router';
import { WorkoutTypeService } from '../../services/workout-type.service';
import { WorkoutType } from '../../models/workout-type';


@Component({
  selector: 'app-workout-session-form',
  standalone: false,
  templateUrl: './workout-session-form.component.html',
  styleUrl: './workout-session-form.component.scss'
})
export class WorkoutSessionFormComponent implements OnInit {
  sessions: WorkoutSession = new WorkoutSession()
  workoutTypes: WorkoutType[] = [];
  constructor(private sessionService: WorkoutSessionService, private router: Router, private workoutTypeService: WorkoutTypeService){}
  ngOnInit(): void {
    this.workoutTypes = this.workoutTypeService.getAll();
  }

  save(): void {
    this.sessionService.create(this.sessions);
    this.router.navigate(['/sessions']);
  }

}
