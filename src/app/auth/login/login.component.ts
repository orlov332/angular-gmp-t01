import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

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

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  doLogin() {
    const cred = {email: this.userEmail, password: this.password};
    this.login.emit(cred);
    this.authService.login(this.userEmail, this.password);
    if (this.authService.isLoggedIn) {
      // Get the redirect URL from our auth service
      // If no redirect has been set, use the default
      const redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/';

      console.log('Redirect the user to' + redirect);
      this.router.navigateByUrl(redirect);
    }
  }

}
