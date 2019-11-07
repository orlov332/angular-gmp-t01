import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {Course} from '../../course';
import {CourseService} from '../../course-service';

@Component({
  selector: 'app-vc-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  providers: [CourseService]
})
export class CourseListComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  public courses: Course[];

  private nextId = 0;

  constructor(private courseService: CourseService) {
    this.logIt('Constructor');
  }

  ngOnInit() {
    this.logIt('ngOnInit');
    this.courses = this.courseService.getCourses();
  }

  deleteCourse(courseId: number) {
    window.alert(`Delete course with id: ${courseId}`);
    console.log(`Delete course with id: ${courseId}`);
  }

  search(searchText: string) {
    window.alert(`Search for string: ${searchText}`);
    console.log(`Search for string: ${searchText}`);
  }

  loadMore() {
    window.alert('Load next page of courses...');
    console.log('Load next page of courses...');
  }

  private logIt(msg: string) {
    console.log(`#${this.nextId++} ${msg}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logIt('ngOnChanges');
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngDoCheck() {
    this.logIt(`DoCheck`);
  }

  ngAfterContentInit() {
    this.logIt(`AfterContentInit`);
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterContentChecked() {
    this.logIt(`AfterContentChecked`);
  }

  ngAfterViewInit() {
    this.logIt(`AfterViewInit`);
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterViewChecked() {
    this.logIt(`AfterViewChecked`);
  }

  ngOnDestroy() {
    this.logIt(`OnDestroy`);
  }

}
