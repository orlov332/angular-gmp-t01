import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {Author, Course} from '../course';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {mergeMap, startWith, tap} from 'rxjs/operators';
import {CourseDataService} from '../course-data.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthorService} from '../author.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';

@Component({
  selector: 'app-vc-course-input',
  templateUrl: './course-input.component.html',
  styleUrls: ['./course-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseInputComponent implements OnInit {

  course$: Observable<Course>;
  authors$: Observable<Author[]>;

  separatorKeysCodes: number[] = [ENTER, COMMA];

  form: FormGroup;
  name = new FormControl('', [Validators.required, Validators.maxLength(50)]);
  description = new FormControl('', [Validators.maxLength(500)]);
  length = new FormControl('', [Validators.required, Validators.min(1)]);
  date = new FormControl('');
  authorsCtrl = new FormControl();
  authorsInput = new FormControl();

  @ViewChild('auto', {static: false})
  matAutocomplete: MatAutocomplete;

  constructor(
    // private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: CourseDataService,
    private authorService: AuthorService
  ) {

    this.form = new FormGroup({
      name: this.name,
      description: this.description,
      date: this.date,
      length: this.length,
      authors: this.authorsCtrl
    });

    this.authors$ = this.authorsInput.valueChanges.pipe(
      startWith(null),
      mergeMap((fltr: string | null) => authorService.getFilteredAuthors(fltr)));

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

  getErrMsg(control: FormControl): string {
    return JSON.stringify(control.errors);
  }

  removeAuthor(author: Author) {
    const value = this.authorsCtrl.value;
    const index = value.findIndex(a => a.id = author.id);

    if (index >= 0) {
      value.splice(index, 1);
      this.authorsCtrl.patchValue(value);
    }

  }

  addAuthor(event: MatChipInputEvent) {

  }

  selectedAuthor(event: MatAutocompleteSelectedEvent) {
    const value = [...this.authorsCtrl.value, event.option.value];
    this.authorsCtrl.patchValue(value);
    this.authorsInput.setValue('');
  }
}
