import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly snackBar: MatSnackBar
  ) {}

  public signUpForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.email],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });

  ngOnInit(): void {}
  onSignUp(): void {
    // tslint:disable-next-line:no-console
    console.log('here', this.signUpForm);
    if (this.signUpForm.status === 'VALID') {
      // travel to dashboard
    } else {
      this.snackBar.open('please fill all required details', 'DONE', {
        duration: 2000
      });
    }
  }
}
