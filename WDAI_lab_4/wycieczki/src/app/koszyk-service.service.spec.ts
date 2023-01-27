import { TestBed } from '@angular/core/testing';

import { KoszykServiceService } from './koszyk-service.service';

describe('KoszykServiceService', () => {
  let service: KoszykServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KoszykServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
