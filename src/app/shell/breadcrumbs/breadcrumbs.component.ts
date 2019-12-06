import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-vc-breadcrumbs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
