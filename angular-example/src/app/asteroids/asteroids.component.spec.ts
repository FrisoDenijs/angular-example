import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroidsComponent } from './asteroids.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AsteroidService, AsteroidRequest } from '../shared';
import { of, Observable } from 'rxjs';

class AsteroidServiceMock {
  getAsteroids(request: AsteroidRequest): Observable<Object> {
    return of(Object);
  }
}

describe('AsteroidsComponent', () => {
  let component: AsteroidsComponent;
  let fixture: ComponentFixture<AsteroidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsteroidsComponent ],
      imports: [ReactiveFormsModule],
      providers: [{provide: AsteroidService, useClass: AsteroidServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsteroidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
