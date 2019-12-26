import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponent} from './auth/login/login.component';


const routes: Routes = [
  {
    path: 'courses',
    data: {preload: true},
    // canLoad: [AuthGuard],
    // canActivate: [AuthGuard],
    loadChildren: () => import('./courses/courses.module').then(mod => mod.CoursesModule),
  },
  {path: 'login', component: LoginComponent, data: {breadcrumb: 'Login'}},
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: true, // <-- debugging purposes only
      })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
