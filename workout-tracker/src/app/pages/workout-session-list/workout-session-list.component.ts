import { Component, OnInit } from '@angular/core';
import { WorkoutSession } from '../../models/workout-session';
import { WorkoutSessionService } from '../../services/workout-session.service';


@Component({
  selector: 'app-workout-session-list',
  standalone: false,
  templateUrl: './workout-session-list.component.html',
  styleUrl: './workout-session-list.component.scss'
})
export class WorkoutSessionListComponent implements OnInit {
  
  sessions: WorkoutSession[] = [];

  constructor(private sesssionService: WorkoutSessionService) {}
  
  
  ngOnInit(): void {
    this.sesssionService.getAll().subscribe(data => {
      this.sessions = data;
    })
  }
  
  

  

}
  