import { TestBed } from '@angular/core/testing';

import { LaminatService } from './laminat.service';

describe('LaminatService', () => {
  let service: LaminatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaminatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
