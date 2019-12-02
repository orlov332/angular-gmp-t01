import {NgModule} from '@angular/core';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseListItemComponent} from './course-list-item/course-list-item.component';
import {SearchPanelComponent} from './search-panel/search-panel.component';
import {CourseDetailsComponent} from './course-details/course-details.component';
import {SharedModule} from '../widgets/shared.module';
import {CourseInputComponent} from './course-input/course-input.component';
import {MatDatepickerModule, MatDialogModule, MatNativeDateModule} from '@angular/material';


@NgModule({
  declarations: [CourseListComponent, CourseListItemComponent, SearchPanelComponent, CourseDetailsComponent, CourseInputComponent,
  ],
  exports: [
    CourseListComponent,
  ],
  entryComponents: [CourseInputComponent],
  imports: [
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
  ]
})
export class CoursesModule {
}
