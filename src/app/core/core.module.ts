import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseListItemComponent} from './course-list-item/course-list-item.component';
import {HeaderComponent} from './header/header.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {SearchPanelComponent} from './search-panel/search-panel.component';
import {FooterComponent} from './footer/footer.component';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatLineModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [CourseListComponent, CourseListItemComponent, HeaderComponent,
    BreadcrumbsComponent, SearchPanelComponent, FooterComponent],
  exports: [
    CourseListComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    SearchPanelComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatLineModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonToggleModule,
  ]
})
export class CoreModule {
}
