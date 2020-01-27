import { TestBed } from '@angular/core/testing';

import { ListCommunicationService } from './list-communication.service';

describe('ListCommunicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListCommunicationService = TestBed.get(ListCommunicationService);
    expect(service).toBeTruthy();
  });
});
