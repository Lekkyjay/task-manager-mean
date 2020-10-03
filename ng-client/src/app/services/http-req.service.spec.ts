import { TestBed } from '@angular/core/testing';

import { HttpReqService } from './http-req.service';

describe('HttpReqService', () => {
  let service: HttpReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
