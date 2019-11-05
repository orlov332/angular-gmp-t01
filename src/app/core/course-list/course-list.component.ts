import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-vc-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  public courses: string[];

  constructor() { }

  ngOnInit() {
    this.courses = [
      'Video Course 1. Name Tag',
      'Video Course 2. Name Tag',
      'Video Course 3. Name Tag',
      'Video Course 4. Name Tag',
      'Video Course 5. Name Tag',
    ];
  }

}
