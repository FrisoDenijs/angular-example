import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('should return true when name and password are the same', () => {
    const service: AuthService = TestBed.get(AuthService);
    const result = service.login('admin', 'admin');
    expect(result).toBe(true);
  });

  it('should return false when name and password are not the same', () => {
    const service: AuthService = TestBed.get(AuthService);
    const result = service.login('admin', 'nimda');
    expect(result).toBe(false);
  });

  it('should return true when logged in', () => {
    const service: AuthService = TestBed.get(AuthService);
    service.login('admin', 'admin');
    const result = service.isLoggedIn();
    expect(result).toBe(true);
  });

  it('should return false when not logged in', () => {
    const service: AuthService = TestBed.get(AuthService);
    const result = service.isLoggedIn();
    expect(result).toBe(false);
  });
});
