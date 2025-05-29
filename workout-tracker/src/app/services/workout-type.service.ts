import { Injectable } from '@angular/core';
import { WorkoutType } from '../models/workout-type';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkoutTypeService {

  private storageKey = 'workoutTypes'

  getAll(): WorkoutType[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  getById(id: number): WorkoutType | undefined {
    return this.getAll().find(t => t.id === id);
  }

  create(type: WorkoutType): void {
    const types = this.getAll();
    type.id = this.generateId(types);
    types.push(type);
    this.saveAll(types);
  }

  delete(id: number): void {
    const types = this.getAll().filter(t => t.id !== id);
    this.saveAll(types);
  }

  private saveAll(types: WorkoutType[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(types));
  }

  private generateId(types: WorkoutType[]): number {
    return types.length ? Math.max(...types.map(t => t.id)) + 1 : 1;
  }
}
