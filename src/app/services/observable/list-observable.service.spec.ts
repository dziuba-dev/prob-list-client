import { TestBed } from '@angular/core/testing';

import { ListObservableService } from './list-observable.service';

describe('ListObservableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListObservableService = TestBed.get(ListObservableService);
    expect(service).toBeTruthy();
  });
});
