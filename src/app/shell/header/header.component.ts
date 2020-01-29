import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../auth/user';
import {Observable} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-vc-header',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  get language(): string {
    // console.log(`Current language: ${this.translate.currentLang}`);
    return this.translate.currentLang;
  }

  set language(value: string) {
    this.translate.use(value);
  }

  @Input()
  isAuth$: Observable<boolean>;

  @Input()
  authUser$: Observable<User>;

  @Output()
  logout = new EventEmitter();

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
  }

  doLogout() {
    this.logout.emit();
  }
}
