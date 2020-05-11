import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponentComponent } from './home-component/home-component.component';

const routes: Routes = [
  { path: 'Signup', component: SignupPageComponent},
  { path: 'Login', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SignupPageComponent, LoginPageComponent, HomeComponentComponent]