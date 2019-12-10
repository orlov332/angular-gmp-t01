import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-vc-search-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {

  value: string;

  @Output()
  search = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onSearch() {
    this.search.emit(this.value);
  }
}
