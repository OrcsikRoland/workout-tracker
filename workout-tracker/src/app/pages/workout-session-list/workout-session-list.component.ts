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
    private sessionService: WorkoutSessionService,
    private workoutTypeService: WorkoutTypeService,
    private router: Router
  ) {}
  
  
  ngOnInit(): void {
    this.loadSessions();
    this.loadWorkoutTypes();
  }

  loadSessions(): void {
    this.sessionService.getAll().subscribe({
      next: (data) => {
        this.sessions = data.sort((a, b) => b.id - a.id);
      },
      error: (err) => console.error(err)
    });
  }
  
  loadWorkoutTypes(): void {
    this.workoutTypeService.getAll().subscribe({
      next: (data) => {
        this.workoutTypes = data;
      },
      error: (err) => console.error(err)
    });
  }

  getWorkoutTypeName(id: number): string {
    let type = this.workoutTypes.find(t => t.id === id);
    return type ? type.name : 'Ismeretlen';
  }


  editSession(id: number): void {
    this.router.navigate(['/sessions/edit', id]);
  }

  deleteSession(id: number): void {
    if (confirm('Are you sure you want to delete this workout session?')) {
      this.sessionService.delete(id).subscribe({
        next: () => this.loadSessions(),
        error: (err) => console.error(err)
      });
    }
  }



}
  


  


  