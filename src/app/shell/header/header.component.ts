import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../auth/user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-vc-header',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  isAuth$: Observable<boolean>;

  @Input()
  authUser$: Observable<User>;

  @Output()
  logout = new EventEmitter();

  language = 'en';

  constructor() {
  }

  ngOnInit() {
  }

  doLogout() {
    this.logout.emit();
  }
}
