import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent implements OnInit {
  constructor(public formBuilder: FormBuilder) {}

  public signInForm: FormGroup = this.formBuilder.group({
    email: ["", Validators.email],
    password: ["", Validators.required]
  });
  ngOnInit(): void {}

  onSignIn(): void {
    console.log("here", this.signInForm);
  }
}
