import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CourseListItemComponent} from './course-list-item.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {TEST_COURSES} from '../../course-test-data';
import {Course} from '../../course';

describe('CourseListItemComponent', () => {
  const testModel: Course = TEST_COURSES[0];
  let component: CourseListItemComponent;
  let fixture: ComponentFixture<CourseListItemComponent>;
  let element: HTMLElement;

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
    component.course = testModel;
    fixture.detectChanges();
    element = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should draw course title', () => {
    const titleEl = element.querySelector('mat-card-title');
    expect(titleEl.textContent).toEqual(testModel.title.toUpperCase());
  });

  it('should draw course description', () => {
    const descEl = element.querySelector('mat-card-content > p');
    expect(descEl.textContent).toEqual(testModel.description);
  });

  it('should rise delete event when delete clicked', () => {
    let deletedCourse: Course;

    component.delete.subscribe((course: Course) => deletedCourse = course);

    const delBtnEl = element.querySelector<HTMLElement>('mat-card-actions > button:last-child');
    delBtnEl.click();

    expect(deletedCourse).toBe(testModel);
  });

});
