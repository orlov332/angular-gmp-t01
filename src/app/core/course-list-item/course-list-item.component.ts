import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-vc-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent implements OnInit {

  @Input()
  public item: string;

  constructor() {
  }

  ngOnInit() {
  }

}
