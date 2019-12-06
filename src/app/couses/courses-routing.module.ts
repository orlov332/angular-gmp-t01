import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseInputComponent} from './course-input/course-input.component';

const coursesRoutes: Routes = [
  {path: 'courses', component: CourseListComponent},
  {path: 'courses/:id', component: CourseInputComponent},
  {path: 'courses/new', component: CourseInputComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(coursesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoursesRoutingModule {
}
