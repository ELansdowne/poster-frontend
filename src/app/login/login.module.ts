import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, SharedModule, LoginRoutingModule],
  declarations: [
    LoginComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent
  ],
  exports: [],
  providers: []
})
export class LoginModule {}
