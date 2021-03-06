import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment
} from '@angular/router';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {selectAuthIsLoggedIn} from './store/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private store$: Store<any>, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    const url: string = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(next, state);
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> {
    const url = `/${route.path}`;

    return this.checkLogin(url);
  }

  checkLogin(url: string): Observable<boolean> {
    // Store the attempted URL for redirecting
    // this.authService.redirectUrl = url;

    return this.store$.pipe(
      select(selectAuthIsLoggedIn),
      tap(isLogged => {
        console.log(`isLoggedIn$ tapped with ${isLogged}`);
        if (!isLogged) {
          console.log('Navigate to the login page with extras');
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
