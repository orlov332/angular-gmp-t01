import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../services/user';

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

  constructor() { }

  ngOnInit() {
  }

}
