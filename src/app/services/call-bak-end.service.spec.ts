import { TestBed } from '@angular/core/testing';

import { CallBakEndService } from './call-bak-end.service';

describe('CallBakEndService', () => {
  let service: CallBakEndService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallBakEndService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
