import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-vc-breadcrumbs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  @Input()
  breadcrumbs: string[];

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.breadcrumbs = this.createBreadcrumbs(this.route.root));
  }

  private createBreadcrumbs(route: ActivatedRoute, breadcrumbs: string[] = []): string[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {

      const label = child.snapshot.data.breadcrumb;
      if (label) {
        breadcrumbs.push(label);
      }

      return this.createBreadcrumbs(child, breadcrumbs);
    }
  }

}
