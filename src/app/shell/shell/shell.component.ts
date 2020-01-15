import {Component, OnInit} from '@angular/core';
import {User} from '../../auth/user';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {selectAuthIsLoggedIn, selectAuthUser} from '../../auth/state/auth.selectors';
import * as AuthActions from '../../auth/state/auth.actions';

@Component({
  selector: 'app-vc-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  constructor(private store$: Store<any>) {
  }

  readonly authUser$: Observable<User> = this.store$.pipe(select(selectAuthUser));
  readonly isAuth$: Observable<boolean> = this.store$.pipe(select(selectAuthIsLoggedIn));

  login(cred: { login: string; password: string }) {
    this.store$.dispatch(AuthActions.authLogin(cred));
  }

  logout() {
    this.store$.dispatch(AuthActions.authLogout);
  }

  ngOnInit(): void {
  }

}
