import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AsteroidService } from './asteroid.service';

describe('AsteroidService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [HttpClientTestingModule]}));

  it('should be created', () => {
    const service: AsteroidService = TestBed.get(AsteroidService);
    expect(service).toBeTruthy();
  });
});
