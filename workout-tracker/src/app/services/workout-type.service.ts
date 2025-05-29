import { Injectable } from '@angular/core';
import { WorkoutType } from '../models/workout-type';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkoutTypeService {

  private workoutTypes: WorkoutType[] = [
    { id: 1, name: 'Cardio' },
    { id: 2, name: 'Strength' },
    { id: 3, name: 'Yoga' },
    { id: 4, name: 'HIIT' }
  ];

  getAll(): WorkoutType[] {
    return this.workoutTypes;
  }

  getNameById(id: number): string {
    return this.workoutTypes.find(t => t.id === id)?.name || 'Ismeretlen';
  }
}
