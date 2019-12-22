import {Injectable} from '@angular/core';
import {User} from './user';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../../environments/environment';
import {Observable, of} from 'rxjs';
import {UserToken} from './user-token';
import {catchError, concatMap, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly loginUrl = `${env.apiBase}/auth/login`;
  private readonly userinfoUrl = `${env.apiBase}/auth/userinfo`;

  userInfo: User;
  token: UserToken;
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private http: HttpClient) {
  }

  login(userEmail: string, password: string): Observable<boolean> {

    return this.http.post<UserToken>(this.loginUrl, {login: userEmail, password})
      .pipe(
        tap(token => {
          console.log(`Login success ${token}`);
          this.token = token;
        }),
        concatMap(token => this.getUserInfo(token)),
        tap(user => {
          console.log(`User info loaded: ${user}`);
          this.userInfo = user;
          this.isLoggedIn = true;
        }),
        map(_ => true),
        catchError(err => {
          console.error(err);
          return of(false);
        })
      );
  }

  private getUserInfo(token: UserToken): Observable<User> {
    return this.http.post<User>(this.userinfoUrl, token);
  }

  logout(): void {
    this.isLoggedIn = false;
    this.userInfo = undefined;
    this.token = undefined;
  }
}
