import {Course} from './course';
import {Injectable} from '@angular/core';
import {TEST_COURSES} from './course-test.data';
import * as _ from 'lodash';

@Injectable({providedIn: 'root'})
export class CourseService {

  private courseList: Course[] = [...TEST_COURSES];

  getList(): Course[] {
    return this.courseList;
  }

  create(course: Course): Course {
    this.courseList.push(course);
    return course;
  }

  getById(id: number): Course {
    return _.find(this.courseList, {id});
  }

  update(course: Course): Course {
    return course;
  }

  remove(course: Course): Course {
    _.remove(this.courseList, c => c.id === course.id);
    return course;
  }
}
