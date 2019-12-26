import {ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Observable, Subscriber, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter} from 'rxjs/operators';

@Component({
  selector: 'app-vc-search-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit, OnDestroy {

  value: string;
  private subscriber: Subscriber<string>;
  private subscription: Subscription;

  @Output()
  search = new EventEmitter();

  constructor() {
    this.subscription =
      new Observable<string>(subscriber => this.subscriber = subscriber)
        .pipe(
          debounceTime(500), // wait 500ms after the last event before emitting last event
          distinctUntilChanged(), // only emit if value is different from previous value
          filter(s => !s || s.length > 2), // only for 3 and more symbols
        )
        .subscribe(model => this.search.emit(model));
  }

  ngOnInit() {
  }

  changed(text: string) {
    this.subscriber.next(text);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
