import { Component } from '@angular/core';
import { WorkoutSession } from '../../models/workout-session';
import { WorkoutSessionService } from '../../services/workout-session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout-session-form',
  standalone: false,
  templateUrl: './workout-session-form.component.html',
  styleUrl: './workout-session-form.component.scss'
})
export class WorkoutSessionFormComponent {
  sessions: WorkoutSession = new WorkoutSession()

  constructor(private sessionService: WorkoutSessionService, private router: Router){}

  save(): void {
    this.sessionService.create(this.sessions);
    this.router.navigate(['/sessions']);
  }

}
