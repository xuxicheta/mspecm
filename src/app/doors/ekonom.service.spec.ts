import { TestBed } from '@angular/core/testing';

import { EkonomService } from './ekonom.service';

describe('EkonomService', () => {
  let service: EkonomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EkonomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
