import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import * as AuthActions from '../state/auth.actions';

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
  login = new EventEmitter<{ login: string, password: string }>();

  constructor(private store$: Store<any>) {
  }

  ngOnInit() {
  }

  doLogin() {
    const cred = {login: this.userEmail, password: this.password};
    this.login.emit(cred);
    this.store$.dispatch(AuthActions.authLogin(cred));
  }

}
