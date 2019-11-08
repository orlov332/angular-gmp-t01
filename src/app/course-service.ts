import {Course} from './course';
import {Injectable} from '@angular/core';
import {TEST_COURSES} from './course-test-data';

@Injectable()
export class CourseService {

  public getCourses(): Course[] {
    return TEST_COURSES;
  }
}
