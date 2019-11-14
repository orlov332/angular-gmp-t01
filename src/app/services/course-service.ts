import {Course} from './course';
import {Injectable} from '@angular/core';
import {TEST_COURSES} from './course-test.data';
import * as _ from 'lodash';

@Injectable({providedIn: 'root'})
export class CourseService {

  getList(): Course[] {
    return TEST_COURSES;
  }

  create(course: Course): Course {
    TEST_COURSES.push(course);
    return course;
  }

  getById(id: number): Course {
    return _.find(TEST_COURSES, {id: id});
  }

  update(course: Course): Course {
    return course;
  }

  remove(course: Course): Course {
    return course;
  }
}
