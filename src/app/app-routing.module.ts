import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseListComponent} from './core/course-list/course-list.component';
import {CourseDetailsComponent} from './core/course-details/course-details.component';


const routes: Routes = [
  {path: '', component: CourseListComponent},
  {path: 'courses/:courseId', component: CourseDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
