import {Component, OnInit} from '@angular/core';
import {User} from '../../auth/user';
import {AuthService} from '../../auth/auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-vc-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  get authUser$(): Observable<User> {
    return this.authService.userInfo$;
  }

  get isAuth$(): Observable<boolean> {
    return this.authService.isLoggedIn$;
  }

  login(cred: { email: string; password: string }) {
    this.authService.login(cred.email, cred.password)
      .subscribe();
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {
  }

}
