import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../../services/course';
import {MatDialog} from '@angular/material';
import {CourseInputComponent} from '../course-input/course-input.component';

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

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  edit(course: Course) {
    this.dialog.open(CourseInputComponent, {
      // width: '250px',
      data: course
    });
  }

}
