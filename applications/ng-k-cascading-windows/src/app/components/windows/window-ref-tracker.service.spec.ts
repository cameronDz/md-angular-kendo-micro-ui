import { TestBed, TestModuleMetadata } from '@angular/core/testing';

import { WindowRefTrackerService } from './window-ref-tracker.service';

describe('WindowRefTrackerService', () => {
  let service: WindowRefTrackerService;
  const config: TestModuleMetadata = {
    providers: [
      WindowRefTrackerService
    ]
  };

  beforeEach(() => {
    TestBed.configureTestingModule(config);
    service = TestBed.inject(WindowRefTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
