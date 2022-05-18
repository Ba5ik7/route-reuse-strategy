import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent {

  code: string = `abstract class BaseRouteReuseStrategy implements RouteReuseStrategy {
    shouldDetach(route: ActivatedRouteSnapshot): boolean
    store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void
    shouldAttach(route: ActivatedRouteSnapshot): boolean
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean
  }`;

  code2: string = `export class CustomReuseStrategy extends RouteReuseStrategy {
  shouldDetach(route: ActivatedRouteSnapshot): boolean { return false; }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void { }
 
  shouldAttach(route: ActivatedRouteSnapshot): boolean { return false; }  

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null { return null; }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }
}`;

  code3: string = `@NgModule({
  ...
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy }
]})`;

  code4: string = `export abstract class ExampleParentBaseComponent implements OnInit, OnDestroy {
  public list: number[];
  public abstract displayName: string;

  ngOnInit(): void {
    this.list = [];
    // Have we taken declarative programming to far? ¯\\_(ツ)_/¯ 
    Array.from({ length: 5 }, () => this.list.push(this.getRandom(100)));
  }

  getRandom(max: number): number {
    return Math.floor(Math.random() * max);
  }

  ngOnDestroy(): void {
    console.log(\`Destroy \${this.displayName}\`);
  }
}`;

  code5: string = `@Component({
    template: \`
      <h2>{{displayName}}: <i>Details</i></h2>
      <div><b>Detail ID:</b> {{routeId}}</div> 
      <div><b>Random value:</b> {{randomVal}}</div>
\`
})
export class ExampleDetailComponent implements OnInit, OnDestroy {
  public routeId!: any;
  public displayName!: any;
  public randomVal!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.routeId = p['detailId'];
      this.displayName = p['displayName'];
    });
    this.randomVal = Math.floor(Math.random() * 100);
    console.log(\`Init detail: \${this.routeId}\`);
  }

  ngOnDestroy(): void {
    console.log(\`Destroy \${this.displayName} Detail: \${this.routeId}\`);
  }
}`;

}