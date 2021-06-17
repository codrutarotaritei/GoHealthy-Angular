import { Router } from '@angular/router';
import { JwtClientService } from './../../services/jwt/jwt-client.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css']
})
export class LogInPageComponent implements OnInit {

  token: String;
  username: String;
  password: String;
  user: any;

  @Input() titleName: string = 'Already\na\nmember?';

  constructor(public authService: JwtClientService, public router: Router) { }

  ngOnInit(): void {
    
  }

  public logIn() {
    this.user = {
      "username": this.username,
      "password": this.password
    }
    let response = this.authService.generateToken(this.user);
    response.subscribe(data => {
        if (data.body == 'true') {
          this.router.navigate(["/"]);
        }
    },(err) => {
      console.log(err.status);
    })
  }

}
