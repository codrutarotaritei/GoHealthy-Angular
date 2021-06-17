import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in-after-register',
  templateUrl: './log-in-after-register.component.html',
  styleUrls: ['./log-in-after-register.component.css']
})
export class LogInAfterRegisterComponent implements OnInit {


  @Input() buttonName: string = 'Add Users';

  constructor() { }

  ngOnInit(): void {
  }

  public titleName(): string {

  return "Thank You for joining us! Now you just need to log in!";
}

}
