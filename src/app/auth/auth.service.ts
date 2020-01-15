import {Injectable} from '@angular/core';
import {User} from './user';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../../environments/environment';
import {Observable} from 'rxjs';
import {UserToken} from './user-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly loginUrl = `${env.apiBase}/auth/login`;
  private readonly userinfoUrl = `${env.apiBase}/auth/userinfo`;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private http: HttpClient) {
  }

  login(login: string, password: string): Observable<UserToken> {
    return this.http.post<UserToken>(this.loginUrl, {login, password});
  }

  getUserInfo(token: UserToken): Observable<User> {
    return this.http.post<User>(this.userinfoUrl, token, {headers: {Authorization: token.token}});
  }

}
