import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AsteroidService } from './asteroid.service';
import { HttpClient } from '@angular/common/http';
import { AsteroidRequest } from '../models';
import { of } from 'rxjs';

describe('AsteroidService', () => {
  let asteroidService: AsteroidService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    asteroidService = TestBed.get(AsteroidService);
  });

  it('should be created', () => {
    expect(asteroidService).toBeTruthy();
  });

  it('should call NASA\'s asteroid API', inject([HttpClient], (http: HttpClient) => {
    const obj = of(new Object());
    spyOn(http, 'get').and.returnValue(obj);
    const asteroidRequest = new AsteroidRequest();
    asteroidRequest.apiKey = 'apikey';
    asteroidRequest.endDate = '1990-12-28';
    asteroidRequest.startDate = '1990-11-28';
    const expectedCall = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=1990-11-28&end_date=1990-12-28&api_key=apikey';

    const result = asteroidService.getAsteroids(asteroidRequest);

    expect(http.get).toHaveBeenCalledWith(expectedCall);
    expect(result).toBe(obj);
  }));
});
