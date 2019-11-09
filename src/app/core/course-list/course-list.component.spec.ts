import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseListComponent} from './course-list.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CourseService} from '../../course-service';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    const courseServiceStub = jasmine.createSpyObj('CourseService', ['getCourses']);

    TestBed.configureTestingModule({
      declarations: [CourseListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{provide: CourseService, useValue: courseServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get courses list from service', () => {
    expect(TestBed.get(CourseService).getCourses.calls.count())
      .toBe(1, 'spy method was called once');
  });
});
