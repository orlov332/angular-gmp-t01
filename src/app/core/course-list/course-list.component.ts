import {Component, OnInit} from '@angular/core';
import {Course} from '../../course';
import {CourseService} from '../../course-service';
import * as _ from 'lodash';

@Component({
  selector: 'app-vc-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {

  public courses: Course[];

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }

  deleteCourse(course: Course) {
    window.alert(`Delete course with id: ${course.id}`);
    console.log(`Delete course with id: ${course.id}`);
  }

  search(searchText: string) {
    if (searchText) {
      this.courses = _.filter(this.courseService.getCourses(), (c: Course) => {
        return c.title && c.title.toLowerCase().includes(searchText.toLowerCase());
      });
    } else {
      this.courses = this.courseService.getCourses();
    }
  }

  loadMore() {
    window.alert('Load next page of courses...');
    console.log('Load next page of courses...');
  }

}
