import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-vc-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userEmail: string;
  password: string;

  @Output()
  login = new EventEmitter<{ email: string, password: string }>();

  constructor() {
  }

  ngOnInit() {
  }

  doLogin() {
    this.login.emit({email: this.userEmail, password: this.password});
  }
}
