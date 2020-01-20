import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WidgetModule} from './widgets/widget.module';
import {ShellModule} from './shell/shell.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoaderComponent} from './loader/loader.component';
import {MatProgressSpinnerModule} from '@angular/material';
import {LoaderInterceptor} from './loader/loader.interceptor';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment as env, environment} from '../environments/environment';
import {AuthModule} from './auth/auth.module';
import {DefaultDataServiceConfig, EntityDataModule} from '@ngrx/data';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: env.apiBase,
  timeout: 3000, // request timeout
};


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({}),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    AuthModule,
    WidgetModule,
    ShellModule,
    AppRoutingModule,
  ],
  providers: [
    {provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig},
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
