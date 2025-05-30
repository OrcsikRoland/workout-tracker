import { Injectable } from '@angular/core';
import { WorkoutType } from '../models/workout-type';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkoutTypeService {

  private apiUrl = 'https://localhost:7077/api/WorkoutType'; 

  constructor(private http: HttpClient) {}

  getAll(): Observable<WorkoutType[]> {
    return this.http.get<WorkoutType[]>(this.apiUrl);
  }

  getById(id: number): Observable<WorkoutType> {
    return this.http.get<WorkoutType>(this.apiUrl +'/' + id);
  }

  create(type: WorkoutType): Observable<WorkoutType> {
    return this.http.post<WorkoutType>(this.apiUrl, type);
  }

  update(id: number, type: WorkoutType): Observable<void> {
    return this.http.put<void>(this.apiUrl +'/' + id, type);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl +'/' + id);
  }
}
