import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {MatButtonModule, MatCardModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthInterceptor} from './auth.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import * as fromAuth from './store/auth.reducer';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './store/auth.effects';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects]),
    TranslateModule
  ],
  exports: [LoginComponent],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]
})
export class AuthModule {
}
