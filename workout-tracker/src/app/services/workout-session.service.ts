import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { WorkoutSession } from '../models/workout-session';

@Injectable({
  providedIn: 'root'
})
export class WorkoutSessionService {

  private storagekey = 'workoutSessions'

  constructor() {}
  getAll(): WorkoutSession[] {
    let data = localStorage.getItem(this.storagekey);
    return data? JSON.parse(data) : [];
  }
  getById(id: number): WorkoutSession | undefined {
    return this.getAll().find(s => s.id === id);
  }

  create(session: WorkoutSession): void {
    const sessions = this.getAll();
    const newId = sessions.length > 0 ? Math.max(...sessions.map(s => s.id)) + 1 : 1;
    session.id = newId;
    sessions.push(session);
    localStorage.setItem(this.storagekey, JSON.stringify(sessions));
  }

  update(id: number, updated: WorkoutSession): void {
    const sessions = this.getAll().map(s => (s.id === id ? updated : s));
    localStorage.setItem(this.storagekey, JSON.stringify(sessions));
  }

  delete(id: number): void {
    const sessions = this.getAll().filter(s => s.id !== id);
    localStorage.setItem(this.storagekey, JSON.stringify(sessions));
  }

  
}
