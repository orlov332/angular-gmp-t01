import {Directive, ElementRef, Input, OnChanges} from '@angular/core';
import {differenceInCalendarDays, isFuture, parseISO} from 'date-fns';


export const FRESH_DAYS_BORDER = 14;
export const FRESH_COLOR = 'green';
export const UPCOMING_COLOR = 'blue';

@Directive({
  selector: '[appVcHighlightByTimeline]'
})
export class HighlightByTimelineDirective implements OnChanges {

  constructor(private element: ElementRef) {
  }

  @Input('appVcHighlightByTimeline')
  creationDate;

  ngOnChanges() {
    const now = new Date();

    let borderColor = this.element.nativeElement.style.borderColor;
    if (isFuture(parseISO(this.creationDate))) {
      // Upcoming course
      borderColor = UPCOMING_COLOR;
    } else if (differenceInCalendarDays(now, parseISO(this.creationDate)) <= FRESH_DAYS_BORDER) {
      //  Fresh course
      borderColor = FRESH_COLOR;
    }

    this.element.nativeElement.style.borderColor = borderColor;
  }

}
