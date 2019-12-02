import {Course} from './course';
import {Injectable} from '@angular/core';
import {TEST_COURSES} from './course-test.data';
import {List} from 'immutable';

@Injectable({providedIn: 'root'})
export class CourseService {

  private courseList: List<Course> = List.of(...TEST_COURSES);

  getList(): List<Course> {
    return this.courseList;
  }

  create(course: Course): List<Course> {
    return this.courseList = this.courseList.push(course);
  }

  getById(id: number): Course {
    return this.courseList.find(this.byId(id));
  }

  private byId(id: number) {
    return (value) => value.id === id;
  }

  update(course: Course): Course {
    return course;
  }

  remove(course: Course): List<Course> {
    return this.courseList =
      this.courseList.remove(
        this.courseList.findIndex(this.byId(course.id))
      );
  }
}
