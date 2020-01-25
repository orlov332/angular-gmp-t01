import {NgModule} from '@angular/core';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseListItemComponent} from './course-list-item/course-list-item.component';
import {SearchPanelComponent} from './search-panel/search-panel.component';
import {WidgetModule} from '../widgets/widget.module';
import {CourseInputComponent} from './course-input/course-input.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatToolbarModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {CoursesRoutingModule} from './courses-routing.module';
import {CourseComponent} from './course/course.component';
import {EntityDefinitionService} from '@ngrx/data';
import {coursesEntityMetadata} from './store/entity-metadata';
import {AuthorInputComponent} from './author-input/author-input.component';


@NgModule({
  declarations: [CourseListComponent, CourseListItemComponent, SearchPanelComponent, CourseInputComponent, CourseComponent, AuthorInputComponent,
  ],
  entryComponents: [CourseInputComponent],
  imports: [
    ReactiveFormsModule,
    WidgetModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    CoursesRoutingModule,
    MatChipsModule,
    MatAutocompleteModule,
  ],
  providers: [
  ]
})

export class CoursesModule {
  constructor(eds: EntityDefinitionService) {
    eds.registerMetadataMap(coursesEntityMetadata);
  }
}
