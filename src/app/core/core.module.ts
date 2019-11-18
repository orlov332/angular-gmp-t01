import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {FooterComponent} from './footer/footer.component';
import {SharedModule} from '../shared/shared.module';
import {LoginComponent} from './login/login.component';


@NgModule({
  declarations: [HeaderComponent,
    BreadcrumbsComponent, FooterComponent, LoginComponent,
  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    LoginComponent,
  ],
  imports: [
    SharedModule,
  ]
})
export class CoreModule {
}
