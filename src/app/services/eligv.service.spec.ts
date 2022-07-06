import { TestBed } from '@angular/core/testing';

import { EligvService } from './eligv.service';

describe('EligvService', () => {
  let service: EligvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EligvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
