import { TestBed } from '@angular/core/testing';

import { AlgebraService } from './algebra.service';

describe('AlgebraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlgebraService = TestBed.get(AlgebraService);
    expect(service).toBeTruthy();
  });
});
