import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import * as AuthActions from '../store/auth.actions';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private store$: Store<any>) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      login: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  doLogin() {
    if (this.form.valid) {
      const cred = this.form.value;

      console.log(cred);

      this.login.emit(cred);
      this.store$.dispatch(AuthActions.authLogin(cred));
    }
  }

}
