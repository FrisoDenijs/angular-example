import { Component, OnInit } from '@angular/core';
import { AsteroidService } from '../shared';
import { AsteroidsForm } from './asteroids.form';

@Component({
  selector: 'app-asteroids',
  templateUrl: './asteroids.component.html',
  styleUrls: ['./asteroids.component.css']
})
export class AsteroidsComponent implements OnInit {

  asteroidsForm: AsteroidsForm;
  asteroidData: string;

  constructor(private asteroidService: AsteroidService) { }

  ngOnInit() {
    this.asteroidsForm = new AsteroidsForm();
  }

  getAsteroids() {
    if (this.asteroidsForm.valid) {
      this.asteroidService.getAsteroids(this.asteroidsForm.getModel()).subscribe(data => {
        this.asteroidData = JSON.stringify(data);
      });
    }
  }
}
