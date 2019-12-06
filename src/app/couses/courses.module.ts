import {NgModule} from '@angular/core';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseListItemComponent} from './course-list-item/course-list-item.component';
import {SearchPanelComponent} from './search-panel/search-panel.component';
import {CourseDetailsComponent} from './course-details/course-details.component';
import {WidgetModule} from '../widgets/widget.module';
import {CourseInputComponent} from './course-input/course-input.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {CoursesRoutingModule} from './courses-routing.module';


@NgModule({
  declarations: [CourseListComponent, CourseListItemComponent, SearchPanelComponent, CourseDetailsComponent, CourseInputComponent,
  ],
  exports: [
    CourseListComponent,
  ],
  entryComponents: [CourseInputComponent],
  imports: [
    CoursesRoutingModule,
    WidgetModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class CoursesModule {
}
