import { Component, OnInit } from '@angular/core';
import { WorkoutSessionService } from '../../services/workout-session.service';
import { WorkoutTypeService } from '../../services/workout-type.service';
import { WorkoutType } from '../../models/workout-type';
import { count } from 'rxjs';

@Component({
  selector: 'app-stats',
  standalone: false,
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent implements OnInit {
  
  stats: { name: string; count: number }[] = [];

  constructor(
    private sessionService: WorkoutSessionService,
    private workoutTypeService: WorkoutTypeService
  ) {}



  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.sessionService.getAll().subscribe({
      next: (sessions) => {
        this.workoutTypeService.getAll().subscribe({
          next: (workoutTypes) => {
            const typeCount: { [key: number]: number } = {};
            for (const session of sessions) {
              typeCount[session.workoutTypeId] = (typeCount[session.workoutTypeId] || 0) + 1;
            }
            this.stats = Object.entries(typeCount).map(([id, count]) => {
              const typeName = workoutTypes.find(t => t.id === +id)?.name ?? 'Unknown';
              return { name: typeName, count };
            });
          },
          error: (err) => console.error(err)
        });
      },
      error: (err) => console.error(err)
    });
  }

}
