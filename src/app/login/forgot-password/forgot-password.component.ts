import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly snackBar: MatSnackBar
  ) {}

  public forgotPasswordForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.email]
  });

  ngOnInit(): void {}
  onForgotPassword(): void {
    console.log('on forgot');
    if (this.forgotPasswordForm.status === 'VALID') {
      // travel to dashboard
    } else {
      this.snackBar.open('please fill all required details', 'DONE', {
        duration: 2000
      });
    }
  }
}
