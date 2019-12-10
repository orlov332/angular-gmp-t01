import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseInputComponent} from './course-input.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';

xdescribe('CourseInputComponent', () => {
  let component: CourseInputComponent;
  let fixture: ComponentFixture<CourseInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseInputComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
