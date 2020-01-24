import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Course} from '../course';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';
import {CourseDataService} from '../course-data.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-vc-course-input',
  templateUrl: './course-input.component.html',
  styleUrls: ['./course-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseInputComponent implements OnInit {

  course$: Observable<Course>;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: CourseDataService
  ) {

    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.maxLength(500)]],
      date: [''],
      length: ['', [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit() {

    const id: number = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.course$ = this.service.getByKey(id);
    } else {
      this.course$ = of(new Course());
    }
    this.course$ = this.course$.pipe(
      tap(c => {
        this.form.patchValue(c);
        this.route.snapshot.data.breadcrumb = c.name;
      }));

  }

  saveClick() {

    if (this.form.valid) {

      this.course$.subscribe(c => {
        const course: Course = {...c, ...this.form.value};

        console.log(this.form.value);

        if (course.id) {
          this.course$ = this.service.update(course);
        } else {
          this.course$ = this.service.add(course);
        }
        this.course$.subscribe(_ => {
          this.router.navigate(['..']);
        });
      });

    }
  }
}
