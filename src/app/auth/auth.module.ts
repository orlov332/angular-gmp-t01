import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {MatButtonModule, MatCardModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ],
  exports: [LoginComponent]
})
export class AuthModule {
}
