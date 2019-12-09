import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Course} from '../course';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseService} from '../course-service';

@Component({
  selector: 'app-vc-course-input',
  templateUrl: './course-input.component.html',
  styleUrls: ['./course-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseInputComponent implements OnInit {
  @Input()
  course: Course;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CourseService
  ) {
  }

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.course = {...this.service.getById(id)};
    } else {
      this.course = new Course();
    }
  }

  saveClick() {

    this.service.save(this.course);
    this.router.navigate(['..']);
  }

  getBreadCrumb() {
    return this.course.title;
  }
}