import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutTypeListComponent } from './workout-type-list.component';

describe('WorkoutTypeListComponent', () => {
  let component: WorkoutTypeListComponent;
  let fixture: ComponentFixture<WorkoutTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkoutTypeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
