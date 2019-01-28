import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: boolean;

  constructor() {
    this.loggedIn = false;
  }

  login(name: string, password: string): boolean {
    if (name === password) {
      this.loggedIn = true;
    }
    return this.loggedIn;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
