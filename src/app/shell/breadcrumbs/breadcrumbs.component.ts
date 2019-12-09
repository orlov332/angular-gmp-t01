import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {distinctUntilChanged, filter, map} from 'rxjs/operators';
import {BreadCrumb} from './bread-crumb';

@Component({
  selector: 'app-vc-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  breadcrumbs$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    distinctUntilChanged(),
    map(() => this.buildBreadCrumb(this.activatedRoute.root))
  );

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
  }

  buildBreadCrumb(route: ActivatedRoute, url: string = '',
                  breadcrumbs: Array<BreadCrumb> = [{label: 'Home', url: '/'}]): Array<BreadCrumb> {
    // If no routeConfig is available we are on the root path
    let newBreadcrumbs = [...breadcrumbs];
    let nextUrl = url;
    const config = route.routeConfig;
    if (config && config.data && config.data.breadcrumb) {
      const label = config.data.breadcrumb instanceof Function ? config.data.breadcrumb(config) : config.data.breadcrumb;
      const path = config.path;
      // In the routeConfig the complete path is not available,
      // so we rebuild it each time
      nextUrl = `${nextUrl}${path}/`;
      const breadcrumb = {
        label,
        url: nextUrl
      };
      newBreadcrumbs = [...breadcrumbs, breadcrumb];
    }
    if (route.firstChild) {
      // If we are not on our current path yet,
      // there will be more children to look after, to build our breadcrumb
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }

    return newBreadcrumbs;
  }

}
