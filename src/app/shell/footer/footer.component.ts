import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-vc-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}