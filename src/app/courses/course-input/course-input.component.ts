import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Course} from '../course';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseDataService} from '../course-data.service';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-vc-course-input',
  templateUrl: './course-input.component.html',
  styleUrls: ['./course-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseInputComponent implements OnInit {

  course$: Observable<Course>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CourseDataService
  ) {
  }

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.course$ = this.service.getByKey(id)
        .pipe(
          tap(c => {
            this.route.snapshot.data.breadcrumb = c.name;
          }));
    } else {
      this.course$ = of(new Course());
    }
  }

  saveClick(course: Course) {

    let s;
    if (course.id) {
      s = this.service.update(course);
    } else {
      s = this.service.add(course);
    }
    s.subscribe(_ => {
      this.router.navigate(['..']);
    });
  }

}
