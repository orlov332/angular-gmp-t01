import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './widgets/shared.module';
import {ServicesModule} from './services/services.module';
import {CoreModule} from './core/core.module';
import {CoursesModule} from './couses/courses.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    ServicesModule,
    CoursesModule // FIXME: Delete when setup routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
