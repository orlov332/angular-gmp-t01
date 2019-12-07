import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CourseListComponent} from './course-list.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CourseService} from '../course-service';
import {MockComponent, MockPipe} from 'ng-mocks';
import {SearchPanelComponent} from '../search-panel/search-panel.component';
import {CourseListItemComponent} from '../course-list-item/course-list-item.component';
import {By} from '@angular/platform-browser';
import {TEST_COURSES} from '../course-test.data';
import {getByTestId, queryByTestId} from '@testing-library/dom';
import {FormsModule} from '@angular/forms';
import {OrderByPipe} from '../../widgets/order-by.pipe';
import {fromJS} from 'immutable';


describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let searchComponent: SearchPanelComponent;
  let itemComponents: CourseListItemComponent[];
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    const courseServiceStub = jasmine.createSpyObj('CourseService', ['getList', 'remove']);
    courseServiceStub.getList.and.returnValue(fromJS(TEST_COURSES));

    TestBed.configureTestingModule({
      declarations: [
        CourseListComponent,
        MockPipe(OrderByPipe, e => e),
        MockComponent(SearchPanelComponent),
        MockComponent(CourseListItemComponent)],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule],
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

    fixture.detectChanges();

    searchComponent = fixture.debugElement.query(By.directive(SearchPanelComponent)).componentInstance;
    itemComponents = fixture.debugElement.queryAll(By.directive(CourseListItemComponent)).map(el => el.componentInstance);
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
    expect(TestBed.get(CourseService).getList)
      .toHaveBeenCalled();
  });

  it('should load more data', () => {
    getByTestId(fixture.debugElement.nativeElement, 'load-more-btn').click();
    expect(component.loadMore).toHaveBeenCalled();
  });

  it('should delete course', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const testCourse = TEST_COURSES[0];
    itemComponents[0].delete.emit(testCourse);
    expect(component.deleteCourse).toHaveBeenCalledWith(testCourse);
    expect(TestBed.get(CourseService).remove).toHaveBeenCalledWith(testCourse);

  });

  it('should hide courses list if empty course list', () => {
    component.courses = null;
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.directive(CourseListItemComponent)))
      .toBeFalsy('there are not course item');
    expect(queryByTestId(fixture.debugElement.nativeElement, 'load-more-btn'))
      .toBeFalsy('hide load more button');
    expect(queryByTestId(fixture.debugElement.nativeElement, 'no-data-placeholder'))
      .toBeTruthy('show no data placeholder');
  });

  it('should hide no data placeholder if not empty course list', () => {
    expect(queryByTestId(fixture.debugElement.nativeElement, 'no-data-placeholder'))
      .toBeFalsy('show no data placeholder');
  });

});
