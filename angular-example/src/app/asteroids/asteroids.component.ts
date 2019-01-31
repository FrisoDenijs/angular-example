import { Component, OnInit } from '@angular/core';
import { AsteroidService } from '../shared';
import { AsteroidsForm } from './asteroids.form';
import { IRootState } from '../store/root.state';
import { Store, select } from '@ngrx/store';
import { Get } from '../store/asteroids/asteroid.action';
import { Observable } from 'rxjs';
import { IAsteroidState } from '../store/asteroids/asteroid.state';

@Component({
  selector: 'app-asteroids',
  templateUrl: './asteroids.component.html',
  styleUrls: ['./asteroids.component.css']
})
export class AsteroidsComponent implements OnInit {

  asteroidsForm: AsteroidsForm;
  asteroidData: string;
  asteroidData$: Observable<IAsteroidState>;

  constructor(private store: Store<IRootState>) { }

  ngOnInit() {
    this.asteroidsForm = new AsteroidsForm();
    this.asteroidData$ = this.store.pipe(select(s => s.asteroidState));
  }

  getAsteroids() {
    if (this.asteroidsForm.valid) {
      // this.asteroidService.getAsteroids(this.asteroidsForm.getModel()).subscribe(data => {
      //   this.asteroidData = JSON.stringify(data);
      // });

      this.store.dispatch(new Get(this.asteroidsForm.getModel()));
    }
  }
}
