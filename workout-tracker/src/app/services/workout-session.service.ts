import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { WorkoutSession } from '../models/workout-session';

@Injectable({
  providedIn: 'root'
})
export class WorkoutSessionService {

  private apiUrl = 'https://localhost:5001/api/workoutsession';
  constructor(private http: HttpClient) { }

  getAll(): Observable<WorkoutSession[]> {
    return this.http.get<WorkoutSession[]>(this.apiUrl);
  }
  
}
