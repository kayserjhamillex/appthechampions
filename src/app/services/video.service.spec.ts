import { TestBed } from '@angular/core/testing';

import { VideoUploadService } from './video.service';

describe('VideoUploadService', () => {
  let service: VideoUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
