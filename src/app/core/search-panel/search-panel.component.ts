import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vc-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {
  value: string;

  constructor() { }

  ngOnInit() {
  }

}
