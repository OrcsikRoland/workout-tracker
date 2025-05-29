import { Injectable } from '@angular/core';
import { WorkoutType } from '../models/workout-type';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkoutTypeService {

  private storageKey = 'workoutTypes';

  constructor() {
    this.seedDefaults(); // csak egyszeri feltöltés
  }

  private seedDefaults(): void {
    if (!localStorage.getItem(this.storageKey)) {
      const defaultTypes: WorkoutType[] = [
        { id: 1, name: 'Cardio' },
        { id: 2, name: 'Strength' },
        { id: 3, name: 'Yoga' },
        { id: 4, name: 'HIIT' },
      ];
      localStorage.setItem(this.storageKey, JSON.stringify(defaultTypes));
    }
  }

  getAll(): WorkoutType[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  getById(id: number): WorkoutType | undefined {
    return this.getAll().find(t => t.id === id);
  }

  create(type: WorkoutType): void {
    const types = this.getAll();
    const newId = types.length > 0 ? Math.max(...types.map(t => t.id ?? 0)) + 1 : 1;
    type.id = newId;
    types.push(type);
    this.save(types);
  }

  update(id: number, updated: WorkoutType): void {
    const types = this.getAll().map(t => t.id === id ? updated : t);
    this.save(types);
  }

  delete(id: number): void {
    const types = this.getAll().filter(t => t.id !== id);
    this.save(types);
  }

  private save(types: WorkoutType[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(types));
  }
}
