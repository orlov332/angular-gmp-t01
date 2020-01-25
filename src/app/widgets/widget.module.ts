import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DurationPipe} from './duration.pipe';
import {OrderByPipe} from './order-by.pipe';
import {HighlightByTimelineDirective} from './highlight-by-timeline.directive';
import {DateInputComponent} from './date-input/date-input.component';
import {MatDatepickerModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [HighlightByTimelineDirective, DurationPipe, OrderByPipe, DateInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
  ],
  exports: [
    HighlightByTimelineDirective,
    DurationPipe,
    OrderByPipe,
    CommonModule,
    DateInputComponent,
  ]
})
export class WidgetModule {
}
