import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DurationPipe} from './duration.pipe';
import {OrderByPipe} from './order-by.pipe';
import {HighlightByTimelineDirective} from './highlight-by-timeline.directive';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule
} from '@angular/material';


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
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SharedModule {
}
