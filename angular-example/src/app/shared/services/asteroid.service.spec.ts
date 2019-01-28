import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AsteroidService } from './asteroid.service';
import { HttpClient } from '@angular/common/http';
import { AsteroidRequest } from '../models';

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
    spyOn(http, 'get').and.callFake(() => {});
    const asteroidRequest = new AsteroidRequest();
    asteroidRequest.apiKey = 'apikey';
    asteroidRequest.endDate = '1990-12-28';
    asteroidRequest.startDate = '1990-11-28';
    const expectedCall = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=1990-11-28&end_date=1990-12-28&api_key=apikey';

    asteroidService.getAsteroids(asteroidRequest);

    expect(http.get).toHaveBeenCalledWith(expectedCall);
  }));
});
