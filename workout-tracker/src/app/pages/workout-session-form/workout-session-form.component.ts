import { Component, OnInit } from '@angular/core';
import { WorkoutSession } from '../../models/workout-session';
import { WorkoutSessionService } from '../../services/workout-session.service';
import { Router } from '@angular/router';
import { WorkoutTypeService } from '../../services/workout-type.service';
import { WorkoutType } from '../../models/workout-type';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-workout-session-form',
  standalone: false,
  templateUrl: './workout-session-form.component.html',
  styleUrl: './workout-session-form.component.scss'
})
export class WorkoutSessionFormComponent implements OnInit {

  sessions: WorkoutSession = new WorkoutSession()
  workoutTypes: WorkoutType[] = [];

  constructor(
    private sessionService: WorkoutSessionService,
    private router: Router,
    private workoutTypeService: WorkoutTypeService,
    private route: ActivatedRoute){}


  ngOnInit(): void {
    this.workoutTypes = this.workoutTypeService.getAll();
    let idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = +idParam;
      const existing = this.sessionService.getById(id);
      if (existing) {
        this.sessions = existing;
      }
    }
  }

  save(): void {
    if (this.sessions.id) {
      this.sessionService.update(this.sessions.id, this.sessions);
    } else {
      this.sessionService.create(this.sessions);
    }
    this.router.navigate(['/sessions']);
  }

}
