import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

  code: string = `export class DefaultRouteReuseStrategy implements RouteReuseStrategy {
  shouldDetach(route: ActivatedRouteSnapshot): boolean { return false; }

  store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void { }

  shouldAttach(route: ActivatedRouteSnapshot): boolean { return false; }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null { return null; }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }
}`;

  code2: string = `export class CustomReuseStrategy extends RouteReuseStrategy {
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return null;
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void { }
}`;

  code3: string = `@NgModule({
  ...
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy }
]})`;

  code4: string = `export abstract class ExampleParentComponent implements OnInit, OnDestroy {
  public randoms: number[];
  public abstract displayName: string;

  ngOnInit(): void {
    this.randoms = [];
    const numberOfLinks = this.getRandom(10);
    for (let i = 0; i < numberOfLinks; i++) {
      this.randoms.push(this.getRandom(100));
    }
  }

  getRandom(max: number): number {
    return Math.floor(Math.random() * max);
  }

  ngOnDestroy(): void {
    console.log(\`Destroy \${this.displayName}\`);
  }
}`;

  code5: string = `@Component({
    selector: 'example-detail',
    templateUrl: './example-detail.component.html',
    styleUrls: ['./example-detail.component.scss']
})
export class ExampleDetailComponent implements OnInit, OnDestroy {
  public routeParam;
  public randomVal: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => this.routeParam = p.detailId);

    this.randomVal = Math.floor(Math.random() * 100);
  }

  ngOnDestroy(): void {
    console.log(\`Destroy detail: \${this.routeParam}\`);
  }
}`;

  constructor() { }

}