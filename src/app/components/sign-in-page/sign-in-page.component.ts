import { UserSignIn } from './../models/user-sign-in';
import { JwtClientService } from './../../services/jwt/jwt-client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent {

  employeeForm: FormGroup;
  user: UserSignIn;
  response: any;

  constructor(
    public authSevice: JwtClientService, 
    private router: Router) { 
    this.user = new UserSignIn();
  }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      username: new FormControl(),
      email: new FormControl()
    });

    var emailEl = document.getElementById("email");
    emailEl.addEventListener("blur", this.emailIsValid, false);
   }

  onSubmit() {
    this.authSevice.register(this.user).subscribe(data => {
      this.response = data;
    });

    if (this.emailIsValid() == true) {
      this.router.navigate(['/log-in-after-register']);
    }
  }

  public emailIsValid() {
    let email = this.user.email;
    let regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (regx.test(email)) {
      return true;

    } else {
      alert("Email is not valid");
      // console.log("Bad");
      return false;
    } 
  }
}
