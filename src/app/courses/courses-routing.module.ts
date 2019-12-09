import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseInputComponent} from './course-input/course-input.component';
import {CourseComponent} from './course/course.component';
import {AuthGuard} from '../auth/auth.guard';

const coursesRoutes: Routes = [
  {
    path: '',
    component: CourseComponent,
    canActivate: [AuthGuard],
    data: {breadcrumb: 'Courses'},
    children: [
      {path: 'new', component: CourseInputComponent, canActivateChild: [AuthGuard], data: {breadcrumb: 'New Course'}},
      {path: ':id', component: CourseInputComponent, canActivateChild: [AuthGuard], data: {breadcrumb: 'Edit Course'}},
      {path: '', component: CourseListComponent, canActivateChild: [AuthGuard]},
    ]
  },
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
