import {Injectable} from '@angular/core';
import {UserService} from './user.service';
import {User} from './user';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly loginUrl = `${env.apiBase}/auth/login`;
  private readonly userinfoUrl = `${env.apiBase}/auth/userinfo`;

  userInfo: User;

  constructor(private http: HttpClient, private userService: UserService) {
  }

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(userEmail: string, password: string): Observable<any> {

    return this.http.put(this.loginUrl, {login: userEmail, password});
  }

  logout(): void {
    this.isLoggedIn = false;
    this.userInfo = undefined;
  }
}
