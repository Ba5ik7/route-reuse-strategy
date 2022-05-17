import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.scss']
})
export class SearchDetailComponent implements OnInit {

  code: string = `@Component({
  selector: 'app-search',
  template: \` 
    <h1>Search Component</h1> 
    <ul class="nav nav-pills flex-column"> 
      <li class="nav-item" *ngFor="let random of randoms"> 
        <a class="nav-link" [routerLink]="['detail', random]" routerLinkActive="active">Go to {{random}}</a> 
      </li> 
    </ul> 
  \`
})
export class SearchComponent extends MasterComponent {
    displayName = 'SearchComponent';
}`;

  code2: string = `{
  path: 'search',
  children: [
    {
      path: '',
      component: SearchComponent
    },
    {
      path: 'detail/:detailId',
      component: DetailComponent
    }
  ]
 }`;

  code3: string = `{
  path: 'search',
  children: [
    {
      path: '',
      component: SearchComponent,
      data: {
        saveComponent: true
      }
    },
    {
      path: 'detail/:detailId',
      component: DetailComponent
    }
  ]
 }`;

  code4: string = `shouldDetach(route: ActivatedRouteSnapshot): boolean {
  return route.data.saveComponent;
}`;

  code5: string = `private savedHandles = new Map<string, DetachedRouteHandle>();`;

  code6: string = `store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
  const key = this.getRouteKey(route);
  this.savedHandles.set(key, handle);
}
 
// Routes are stored as an array of route configs, so we can find any with url property and join them to create the URL for the rotue
private getRouteKey(route: ActivatedRouteSnapshot): string {
  return route.pathFromRoot.filter(u => u.url).map(u => u.url).join('/');
}`;

  code7: string = `shouldAttach(route: ActivatedRouteSnapshot): boolean {
  return this.savedHandles.has(this.getRouteKey(route));
}

retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
  return this.savedHandles.get(this.getRouteKey(route));
}`;

  code8: string = `public clearSavedHandle(key: string): void {
  this.savedHandles.delete(key);
}`;
  
 code9: string = `<button class="btn btn-danger" (click)="clearStoredRoute()">Clear Search</button> `;

 code10: string = `constructor(private route: ActivatedRoute, private routeReuseStrategy: RouteReuseStrategy) { }

clearStoredRoute(): void {
  (this.routeReuseStrategy as CustomReuseStrategy).clearSavedHandle('/router-reuse/search/');
}`;

  code11: string = `public clearSavedHandle(key: string): void {
  const handle = this.savedHandles.get(key);
  if (handle) {
    (handle as any).componentRef.destroy();
  }

  this.savedHandles.delete(key);
}`;

  constructor() { }

  ngOnInit(): void {
  }

}
