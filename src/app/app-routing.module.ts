import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponent} from './auth/login/login.component';
import {StoreModule} from '@ngrx/store';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';


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
    StoreModule.forRoot({
      router: routerReducer,
    }),
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false, // <-- debugging purposes only
      }),
    // Connects RouterModule with StoreModule
    StoreRouterConnectingModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
