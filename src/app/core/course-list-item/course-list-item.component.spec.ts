import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseListItemComponent} from './course-list-item.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {TEST_COURSES} from '../../course-test-data';

describe('CourseListItemComponent', () => {
  let component: CourseListItemComponent;
  let fixture: ComponentFixture<CourseListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // imports: [],
      declarations: [CourseListItemComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListItemComponent);
    component = fixture.componentInstance;
    component.course = TEST_COURSES[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
