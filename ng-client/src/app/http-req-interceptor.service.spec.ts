import { TestBed } from '@angular/core/testing';

import { HttpReqInterceptorService } from './http-req-interceptor';

describe('HttpReqInterceptorService', () => {
  let service: HttpReqInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpReqInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
