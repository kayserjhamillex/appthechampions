import { TestBed } from '@angular/core/testing';

import { ReservaLocalService } from './reservalocal.service';

describe('ReservalocalService', () => {
  let service: ReservaLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservaLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
