import { TestBed } from '@angular/core/testing';

import { ListMapperService } from './list-mapper.service';

describe('ListMapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListMapperService = TestBed.get(ListMapperService);
    expect(service).toBeTruthy();
  });
});
