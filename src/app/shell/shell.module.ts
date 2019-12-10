import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {FooterComponent} from './footer/footer.component';
import {WidgetModule} from '../widgets/widget.module';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {ShellComponent} from './shell/shell.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [HeaderComponent,
    BreadcrumbsComponent, FooterComponent, ShellComponent
  ],
  exports: [
    ShellComponent,
  ],
  imports: [
    WidgetModule,
    MatToolbarModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterModule,
  ]
})
export class ShellModule {
}
