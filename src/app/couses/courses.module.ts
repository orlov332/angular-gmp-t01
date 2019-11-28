import {NgModule} from '@angular/core';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseListItemComponent} from './course-list-item/course-list-item.component';
import {SearchPanelComponent} from './search-panel/search-panel.component';
import {CourseDetailsComponent} from './course-details/course-details.component';
import {SharedModule} from '../widgets/shared.module';


@NgModule({
  declarations: [CourseListComponent, CourseListItemComponent, SearchPanelComponent, CourseDetailsComponent,
  ],
  exports: [
    CourseListComponent,
  ],
  imports: [
    SharedModule
  ]
})
export class CoursesModule {
}
