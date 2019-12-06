import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WidgetModule} from './widgets/widget.module';
import {ServicesModule} from './services/services.module';
import {CoursesModule} from './couses/courses.module';
import {ShellModule} from './shell/shell.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    WidgetModule,
    ShellModule,
    ServicesModule,
    CoursesModule,
    ShellModule,
    // FIXME: Delete when setup routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
