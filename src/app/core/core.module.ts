import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseListItemComponent} from './course-list-item/course-list-item.component';
import {HeaderComponent} from './header/header.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {SearchPanelComponent} from './search-panel/search-panel.component';
import {FooterComponent} from './footer/footer.component';
import {MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatLineModule, MatToolbarModule} from '@angular/material';


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
    MatChipsModule
  ]
})
export class CoreModule {
}
