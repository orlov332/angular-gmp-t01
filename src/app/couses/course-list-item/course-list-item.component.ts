import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../../services/course';

@Component({
  selector: 'app-vc-course-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent implements OnInit {

  @Input()
  public course: Course;

  @Output()
  delete = new EventEmitter<Course>();

  constructor() {
  }

  ngOnInit() {
  }


}
