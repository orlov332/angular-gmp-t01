import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DurationPipe} from './duration.pipe';
import {OrderByPipe} from './order-by.pipe';
import {HighlightByTimelineDirective} from './highlight-by-timeline.directive';


@NgModule({
  declarations: [HighlightByTimelineDirective, DurationPipe, OrderByPipe],
  imports: [
    CommonModule,
  ],
  exports: [
    HighlightByTimelineDirective,
    DurationPipe,
    OrderByPipe,
    CommonModule,
  ]
})
export class WidgetModule {
}
