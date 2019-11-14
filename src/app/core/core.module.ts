import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {FooterComponent} from './footer/footer.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [HeaderComponent,
    BreadcrumbsComponent, FooterComponent,
  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class CoreModule {
}
