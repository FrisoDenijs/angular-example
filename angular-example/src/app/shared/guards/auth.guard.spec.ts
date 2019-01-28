import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuard } from './auth.guard';
import { Router } from '@angular/router';
import { AuthService } from '../services';


describe('AuthGuard', () => {
  let routerMock: Router;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthService,
        AuthGuard
      ]
    });

    authService = TestBed.get(AuthService);
    routerMock = TestBed.get(Router);
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should route to error page when not logged in', inject([AuthGuard], (guard: AuthGuard) => {
    spyOn(authService, 'isLoggedIn').and.returnValue(false);
    spyOn(routerMock, 'navigateByUrl').and.callFake(() => {});

    guard.canActivate(undefined, undefined);

    expect(authService.isLoggedIn).toHaveBeenCalled();
    expect(routerMock.navigateByUrl).toHaveBeenCalledWith('error');
  }));

  

  it('should return true when logged in', inject([AuthGuard], (guard: AuthGuard) => {
    spyOn(authService, 'isLoggedIn').and.returnValue(true);

    const result = guard.canActivate(undefined, undefined);

    expect(authService.isLoggedIn).toHaveBeenCalled();
    expect(result).toBe(true);
  }));

});
