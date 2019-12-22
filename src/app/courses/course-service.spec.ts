import {CourseService} from './course-service';
import {TestBed} from '@angular/core/testing';
import {TEST_COURSES} from './course-test.data';

describe('CourseService', () => {

  let courseService: CourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [CourseService]});
    courseService = TestBed.get(CourseService);
  });

  it('should create an instance', () => {
    expect(courseService).toBeTruthy();
  });

  it('should return course collection', () => {
    const courses = courseService.getList(searchText);
    expect(courses).toBeDefined();
    expect(courses.size).toBeGreaterThan(0);
  });

  it('should return course by id', () => {
    const course = courseService.getById(333);
    expect(course).toBeDefined();
    expect(course.id).toBe(333);
  });

  it('should create course', () => {
    const courseList = courseService.create(TEST_COURSES[1]);
    expect(courseList).toBeDefined();
    expect(courseService.getById(TEST_COURSES[1].id)).toBeTruthy();
  });

  it('should update course', () => {
    const course = courseService.update(TEST_COURSES[1]);
    expect(course).toBeDefined();
    expect(course).toEqual(TEST_COURSES[1]);
  });

  it('should remove course', () => {
    const course = courseService.remove(TEST_COURSES[1]);
    expect(course).toBeDefined();
    expect(courseService.getById(TEST_COURSES[1].id)).toBeFalsy();
  });

});
