import {Component, Inject, OnInit} from '@angular/core';
import {Course} from '../../services/course';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-vc-course-input',
  templateUrl: './course-input.component.html',
  styleUrls: ['./course-input.component.scss']
})
export class CourseInputComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CourseInputComponent>,
    @Inject(MAT_DIALOG_DATA) public course: Course
  ) {
  }

  ngOnInit() {
  }

  cancelClick(): void {
    this.dialogRef.close();
  }

}
