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
    <ul class="nav nav-tabs"> 
        <li class="nav-item" *ngFor="let random of randoms"> 
          <a class="nav-link" [routerLink]="['detail', random]" routerLinkActive="active">Go to {{random}}</a> 
        </li> 
    </ul> 

    <router-outlet></router-outlet>\`
})
export class ParentComponent extends MasterComponent {
  displayName = 'ParentComponent';
}`;

  code2: string = `{
  path: 'parent', 
  component: ParentComponent,
  children: [
    {
      path: 'detail/:detailId',
      component: DetailComponent
    }
  ]
}`;

  code3: string = `shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
  return false;
}`;

  code4: string = `{
  path: 'detail/:detailId',
  component: DetailComponent,
  data: {
    alwaysRefresh: true
  }
 }`;

 code5: string = `shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
  if (future.routeConfig === curr.routeConfig) {
    return !future.data.alwaysRefresh;
  } else {
    return false;
  }
}`;

}