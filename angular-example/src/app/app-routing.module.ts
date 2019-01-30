import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './shared';
import { LoginComponent } from './login/login.component';
import { AsteroidsComponent } from './asteroids/asteroids.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'asteroids', component: AsteroidsComponent, canActivate: [AuthGuard]},
  { path: 'message', component: MessageComponent},
  { path: 'error', component: ErrorComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
