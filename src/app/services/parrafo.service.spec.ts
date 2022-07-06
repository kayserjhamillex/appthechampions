import { TestBed } from '@angular/core/testing';

import { ParrafoService } from './parrafo.service';

describe('ParrafoService', () => {
  let service: ParrafoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParrafoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
