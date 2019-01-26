import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: 'input', component: InputComponent },
  { path: 'output', component: OutputComponent },
  { path: 'error', component: ErrorComponent },
  { path: '', redirectTo: '/input', pathMatch: 'full' },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
