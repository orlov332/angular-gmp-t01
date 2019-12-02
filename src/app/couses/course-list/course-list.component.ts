import {Component, OnInit} from '@angular/core';
import {Course} from '../../services/course';
import {CourseService} from '../../services/course-service';
import {List} from 'immutable';

@Component({
  selector: 'app-vc-course-list',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {

  public courses: List<Course>;

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    this.courses = this.courseService.getList();
  }

  deleteCourse(course: Course) {
    if (window.confirm(`Do you really want to delete course "${course.title}"`)) {
      console.log(`Delete course with id: ${course.id}`);
      this.courses = this.courseService.remove(course);
    }
  }

  search(searchText: string) {
    if (searchText) {
      this.courses = this.courseService.getList().filter((c: Course) => {
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
