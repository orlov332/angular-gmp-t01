import {Component, OnInit} from '@angular/core';
import {Course} from '../course';
import {CourseService} from '../course-service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-vc-course-list',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {

  private readonly pageSize = 5;
  private start = 0;
  private count = this.pageSize;

  public courses$: Observable<Course[]>;

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    this.courses$ = this.courseService.getList(null, this.start, this.count);
  }

  deleteCourse(course: Course) {
    if (window.confirm(`Do you really want to delete course "${course.name}"`)) {
      console.log(`Delete course with id: ${course.id}`);
      this.courseService.remove(course)
        .subscribe(_ => this.courses$ = this.courseService.getList(null, this.start, this.count));
    }
  }

  search(searchText: string) {
    this.courses$ = this.courseService.getList(searchText, this.start, this.count);
  }

  loadMore() {
    this.count += this.pageSize;
    this.courses$ = this.courseService.getList(null, this.start, this.count);
    console.log('Load next page of courses...');
  }

}
