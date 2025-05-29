import { TestBed } from '@angular/core/testing';

import { WorkoutTypeService } from './workout-type.service';

describe('WorkoutTypeService', () => {
  let service: WorkoutTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
