import { TestBed } from '@angular/core/testing';

import { WindowRefTrackerService } from './window-ref-tracker.service';

describe('WindowRefTrackerService', () => {
  let service: WindowRefTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowRefTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
