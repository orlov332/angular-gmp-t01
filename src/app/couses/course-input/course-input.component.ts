import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../../services/course';

@Component({
  selector: 'app-vc-course-input',
  templateUrl: './course-input.component.html',
  styleUrls: ['./course-input.component.scss']
})
export class CourseInputComponent implements OnInit {

  constructor() {
  }

  @Input()
  course: Course;

  @Output()
  save = new EventEmitter<Course>();

  ngOnInit() {
  }

}
