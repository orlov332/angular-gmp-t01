import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CourseListItemComponent} from './course-list-item.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {TEST_COURSES} from '../course-test.data';
import {Course} from '../course';
import {MockDirective, MockPipe} from 'ng-mocks';
import {getByTestId, getNodeText} from '@testing-library/dom';
import {DurationPipe} from '../../widgets/duration.pipe';
import {HighlightByTimelineDirective} from '../../widgets/highlight-by-timeline.directive';
import {RouterLink} from '@angular/router';

describe('CourseListItemComponent', () => {
  const testModel: Course = TEST_COURSES[0];
  let component: CourseListItemComponent;
  let fixture: ComponentFixture<CourseListItemComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseListItemComponent,
        MockPipe(DurationPipe, e => e.toString()),
        MockDirective(HighlightByTimelineDirective),
        MockDirective(RouterLink),
      ],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListItemComponent);
    component = fixture.componentInstance;
    component.course = testModel;
    fixture.detectChanges();
    element = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should draw course title', () => {
    expect(getNodeText(getByTestId(element, 'title-text')))
      .toEqual(testModel.title.toUpperCase());
  });

  it('should draw course description', () => {
    expect(getNodeText(getByTestId(element, 'description-text')))
      .toEqual(testModel.description);
  });

  it('should rise delete event when delete clicked', () => {
    let deletedCourse: Course = null;

    component.delete.subscribe((course: Course) => deletedCourse = course);

    getByTestId(element, 'delete-btn').click();

    expect(deletedCourse).toBe(testModel);
  });

});
