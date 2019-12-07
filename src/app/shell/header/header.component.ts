import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../auth/user';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vc-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  isAuth: boolean;

  @Input()
  authUser: User;

  @Output()
  logout = new EventEmitter();

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  doLogout() {
    this.logout.emit();
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
