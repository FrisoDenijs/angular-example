import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { AsteroidsComponent } from './asteroids/asteroids.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'asteroids', component: AsteroidsComponent, canActivate: [AuthGuard]},
  { path: 'error', component: ErrorComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
