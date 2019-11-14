import {CourseService} from './course-service';
import {TestBed} from '@angular/core/testing';

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
    const courses = courseService.getList();
    expect(courses).toBeDefined();
    expect(courses.length).toBeGreaterThan(0);
  });

});
