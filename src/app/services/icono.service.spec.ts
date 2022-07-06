import { TestBed } from '@angular/core/testing';

import { IconoUploadService } from './icono.service';

describe('IconoUploadService', () => {
  let service: IconoUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconoUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
