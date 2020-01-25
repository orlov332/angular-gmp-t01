import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import * as AuthActions from '../store/auth.actions';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-vc-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output()
  doLogin = new EventEmitter<{ login: string, password: string }>();

  form: FormGroup;
  login = new FormControl('', [Validators.required, Validators.minLength(6)]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);

  constructor(private store$: Store<any>) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      login: this.login,
      password: this.password,
    });
  }

  submitLogin() {
    if (this.form.valid) {
      const cred = this.form.value;

      console.log(cred);

      this.doLogin.emit(cred);
      this.store$.dispatch(AuthActions.authLogin(cred));
    }
  }

}
