import { TestBed } from '@angular/core/testing';

import { RealDragDropService } from './real-drag-drop.service';

describe('RealDragDropService', () => {
  let service: RealDragDropService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealDragDropService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
