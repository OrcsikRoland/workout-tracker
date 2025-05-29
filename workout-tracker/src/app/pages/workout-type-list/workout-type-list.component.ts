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
    this.types = this.typeService.getAll();
  }


  save(): void {
    if (this.type.name.trim() === '') return;

    if (this.type.id) {
      this.typeService.update(this.type.id, this.type);
    } else {
      this.typeService.create(this.type);
    }

    this.type = new WorkoutType();
    this.refreshList();
  }

  edit(t: WorkoutType): void {
    this.type = { ...t };
  }

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this type?')) {
      this.typeService.delete(id);
      this.refreshList();
    }
  }

}
