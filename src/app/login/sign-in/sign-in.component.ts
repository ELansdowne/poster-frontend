import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly snackBar: MatSnackBar
  ) {}

  public signInForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.email],
    password: ['', Validators.required]
  });
  ngOnInit(): void {}

  onSignIn(): void {
    // tslint:disable-next-line:no-console
    console.log('here', this.signInForm);
    if (this.signInForm.status === 'VALID') {
      // travel to dashboard
    } else {
      this.snackBar.open('please fill all required details', 'DONE', {
        duration: 2000
      });
    }
  }
}
