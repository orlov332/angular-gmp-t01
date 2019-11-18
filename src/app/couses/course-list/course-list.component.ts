import {Component, OnInit} from '@angular/core';
import {Course} from '../../services/course';
import {CourseService} from '../../services/course-service';
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
    this.loadCourseList();
  }

  private loadCourseList() {
    this.courses = [...this.courseService.getList()];
  }

  deleteCourse(course: Course) {
    if (window.confirm(`Do you really want to delete course "${course.title}"`)) {
      console.log(`Delete course with id: ${course.id}`);
      this.courseService.remove(course);
      this.loadCourseList();
    }
  }

  search(searchText: string) {
    if (searchText) {
      this.courses = _.filter(this.courseService.getList(), (c: Course) => {
        return c.title && c.title.toLowerCase().includes(searchText.toLowerCase());
      });
    } else {
      this.courses = this.courseService.getList();
    }
  }

  loadMore() {
    window.alert('Load next page of courses...');
    console.log('Load next page of courses...');
  }

}
