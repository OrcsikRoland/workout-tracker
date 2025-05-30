import { Component, OnInit } from '@angular/core';
import { WorkoutType } from '../../models/workout-type';
import { WorkoutTypeService } from '../../services/workout-type.service';

@Component({
  selector: 'app-workout-type-list',
  standalone: false,
  templateUrl: './workout-type-list.component.html',
  styleUrl: './workout-type-list.component.scss'
})
export class WorkoutTypeListComponent implements OnInit{
  
  types: WorkoutType[] = [];
  type: WorkoutType = new WorkoutType();
  
  constructor(private typeService: WorkoutTypeService) {}

  ngOnInit(): void {
    this.refreshList()
  }

  refreshList(): void {
    this.typeService.getAll().subscribe({
      next: (data) => this.types = data,
      error: (err) => console.error(err)
    })
  }


  save(): void {
    if (this.type.name.trim() === '') return;

    if (this.type.id) {
      this.typeService.update(this.type.id, this.type).subscribe({
        next: () => {
          this.type = new WorkoutType();
          this.refreshList();
        },
        error: (err) => console.error(err)
      });
    } else {
      this.typeService.create(this.type).subscribe({
        next: () => {
          this.type = new WorkoutType();
          this.refreshList();
        },
        error: (err) => console.error(err)
      });
    }
  }
  edit(t: WorkoutType): void {
    this.type = { ...t };
  }

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this type?')) {
      this.typeService.delete(id).subscribe({
        next: () => this.refreshList(),
        error: (err) => console.error(err)
      });
    }
  }

}
