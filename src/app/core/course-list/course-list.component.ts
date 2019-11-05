import {Component, OnInit} from '@angular/core';
import {Course} from '../../course';
import {CourseService} from '../../course-service';

@Component({
  selector: 'app-vc-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  providers: [CourseService]
})
export class CourseListComponent implements OnInit {

  public courses: Course[];

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }

}
