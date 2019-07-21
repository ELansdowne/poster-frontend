import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { LoaderDialogComponent } from 'src/app/dashboard/shared/dialog/loader-dialog/loader-dialog.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly snackBar: MatSnackBar,
    private readonly router: Router,
    private readonly dialog: MatDialog,
  ) {}

  public signInForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  ngOnInit(): void {}

  onSignIn(): void {
    // tslint:disable-next-line:no-console
    console.log('here', this.signInForm);
    if (this.signInForm.status === 'VALID') {
      this.dialog.open(LoaderDialogComponent, {
        panelClass: 'custom-dialog',
        data: {
          message: 'yes',
        },
      });
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 4000);
      // travel to dashboard
    } else {
      this.snackBar.open('please fill all required details', 'DONE', {
        duration: 2000
      });
    }
  }
}
