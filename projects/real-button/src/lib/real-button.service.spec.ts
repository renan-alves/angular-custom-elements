import { TestBed } from '@angular/core/testing';

import { RealButtonService } from './real-button.service';

describe('RealButtonService', () => {
  let service: RealButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
