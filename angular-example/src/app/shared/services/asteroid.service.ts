import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsteroidRequest } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AsteroidService {

  private readonly baseUrl = 'https://api.nasa.gov/neo/rest/v1';

  constructor(private http: HttpClient) { }

  getAsteroids(request: AsteroidRequest) {
    return this.http.get(`${this.baseUrl}/feed?start_date=${request.startDate}&end_date=${request.endDate}&api_key=${request.apiKey}`);
  }
}
