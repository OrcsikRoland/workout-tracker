import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { WorkoutSession } from '../models/workout-session';

@Injectable({
  providedIn: 'root'
})
export class WorkoutSessionService {

  private apiUrl = 'https://localhost:7077/api/WorkoutSession';

  constructor(private http: HttpClient) {}

  getAll(): Observable<WorkoutSession[]> {
    return this.http.get<WorkoutSession[]>(this.apiUrl)
  }

  getById(id: number): Observable<WorkoutSession> {
    return this.http.get<WorkoutSession>(this.apiUrl +'/' + id)
  }

  create(session: WorkoutSession): Observable<WorkoutSession> {
    return this.http.post<WorkoutSession>(this.apiUrl, session);
  }

  update(id: number, session: WorkoutSession): Observable<void> {
    return this.http.put<void>(this.apiUrl +'/' + id, session);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl +'/' + id);
  }
}
