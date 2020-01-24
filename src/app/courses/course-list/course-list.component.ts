import {Component, OnInit} from '@angular/core';
import {Course} from '../course';
import {Observable} from 'rxjs';
import {CourseDataService} from '../course-data.service';

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
  private loading$: Observable<boolean>;

  constructor(private courseService: CourseDataService) {
    this.courses$ = courseService.getWithQuery({
      start: this.start.toString(),
      count: this.count.toString()
    });
    this.loading$ = courseService.loading$;
  }

  ngOnInit() {
  }

  deleteCourse(course: Course) {
    if (window.confirm(`Do you really want to delete course "${course.name}"`)) {
      console.log(`Delete course with id: ${course.id}`);
      this.courseService.delete(course);
    }
  }

  search(searchText: string) {
    console.log(`Search courses by text: ${searchText}`);
    this.courses$ = this.courseService.getWithQuery({
      textFragment: searchText,
      start: this.start.toString(),
      count: this.count.toString()
    });
  }

  loadMore() {
    this.count += this.pageSize;
    this.courses$ = this.courseService.getWithQuery({
      start: this.start.toString(),
      count: this.count.toString()
    });
    console.log('Load next page of courses...');
  }

}
