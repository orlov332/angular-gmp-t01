import {FRESH_COLOR, FRESH_DAYS_BORDER, HighlightByTimelineDirective, UPCOMING_COLOR} from './highlight-by-timeline.directive';
import {Component, DebugElement} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {addDays, subDays} from 'date-fns';
import {By} from '@angular/platform-browser';

describe('HighlightByTimeline Directive', () => {

  @Component({
    template: `
        <h2 [appVcHighlightByTimeline]="creationDate">Some header</h2>`
  })
  class TestComponent {
    creationDate = new Date();
  }

  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let highlightedEl: DebugElement;
  const now = new Date();

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [HighlightByTimelineDirective, TestComponent]
    }).createComponent(TestComponent);
    component = fixture.componentInstance;

    highlightedEl = fixture.debugElement.query(By.directive(HighlightByTimelineDirective));
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should highlight upcoming element', () => {
    component.creationDate = addDays(now, 1);
    fixture.detectChanges();

    expect(highlightedEl.nativeElement.style.borderColor).toBe(UPCOMING_COLOR);
  });

  it('should highlight fresh element', () => {
    component.creationDate = subDays(now, FRESH_DAYS_BORDER);
    fixture.detectChanges();

    expect(highlightedEl.nativeElement.style.borderColor).toBe(FRESH_COLOR);
  });

  it('shouldn\'t highlight too old element', () => {
    const oldColor = highlightedEl.nativeElement.style.borderColor;

    component.creationDate = subDays(now, FRESH_DAYS_BORDER + 1);
    fixture.detectChanges();

    expect(highlightedEl.nativeElement.style.borderColor).toBe(oldColor);
  });

});
