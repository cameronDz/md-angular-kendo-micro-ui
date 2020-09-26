import { TestBed } from '@angular/core/testing';

import { SimpleComponentsService } from './simple-components.service';

describe('SimpleComponentsService', () => {
  let service: SimpleComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
