import { Component, OnInit } from '@angular/core';

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
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ];
  }

}
