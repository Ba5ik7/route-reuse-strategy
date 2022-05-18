import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-child-desgin',
  templateUrl: './parent-child-design.component.html'
})
export class ParentChildDesignComponent {
  
  code: string = `@Component({
  selector: 'app-parent',
  template: \` 
    <h1>Parent Component</h1> 
    <ul> 
        <li *ngFor="let random of randoms"> 
          <a [routerLink]="['detail', displayName, random]">Go to {{random}}</a> 
        </li> 
    </ul> 

    <router-outlet></router-outlet>\`
})
export class ParentComponent extends ParentBaseComponent {
  displayName = 'ParentComponent';
}`;

  code2: string = `{
  path: 'parent', 
  component: ParentComponent,
  children: [
    {
      path: 'detail/:displayName/:detailId',
      component: DetailComponent
    }
  ]
}`;

  code3: string = `shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
  return future.routeConfig === curr.routeConfig;
}`;

  code4: string = `shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
  return false;
}`;

  code5: string = `{
  path: 'detail/:displayName/:detailId',
  component: DetailComponent,
  data: {
    alwaysRefresh: true
  }
 }`;

 code6: string = `shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
  if (future.routeConfig === curr.routeConfig) {
    return !future.data.alwaysRefresh;
  } else {
    return false;
  }
}`;

}