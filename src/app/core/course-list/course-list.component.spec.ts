import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseListComponent} from './course-list.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CourseService} from '../../course-service';
import {OrderByPipe} from '../order-by.pipe';
import {MockComponent, MockPipe} from 'ng-mocks';
import {SearchPanelComponent} from '../search-panel/search-panel.component';
import {CourseListItemComponent} from '../course-list-item/course-list-item.component';
import {By} from '@angular/platform-browser';
import {TEST_COURSES} from '../../course-test.data';
import {of} from 'rxjs';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let searchComponent: SearchPanelComponent;
  let itemComponents: CourseListItemComponent[];
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    const courseServiceStub = jasmine.createSpyObj('CourseService', ['getCourses']);
    courseServiceStub.getCourses.and.returnValue(of(TEST_COURSES));

    TestBed.configureTestingModule({
      declarations: [
        CourseListComponent,
        MockPipe(OrderByPipe),
        MockComponent(SearchPanelComponent),
        MockComponent(CourseListItemComponent)],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{provide: CourseService, useValue: courseServiceStub}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);

    component = fixture.componentInstance;
    spyOn(component, 'search').and.callThrough();
    spyOn(component, 'deleteCourse').and.callThrough();
    spyOn(component, 'loadMore').and.callThrough();

    searchComponent = fixture.debugElement.query(By.directive(SearchPanelComponent)).componentInstance;
    itemComponents = fixture.debugElement.queryAll(By.directive(CourseListItemComponent)).map(el => el.componentInstance);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search courses by title', () => {
    searchComponent.search.emit('eng');
    // ensure event listener called
    expect(component.search).toHaveBeenCalledWith('eng');
  });

  it('should reset search courses', () => {
    searchComponent.search.emit(null);
    // ensure event listener called
    expect(component.search).toHaveBeenCalledWith(null);
  });

  it('should get courses list from service', () => {
    expect(TestBed.get(CourseService).getCourses.calls.count())
      .toBe(1, 'spy method was called once');
  });
});
