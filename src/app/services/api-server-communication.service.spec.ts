import { TestBed } from '@angular/core/testing';

import { ApiServerCommunicationService } from './api-server-communication.service';

describe('ApiServerCommunicationService', () => {
  let service: ApiServerCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServerCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
