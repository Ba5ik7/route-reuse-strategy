import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-child-desgin',
  templateUrl: './parent-child-desgin.component.html',
  styleUrls: ['./parent-child-desgin.component.scss']
})
export class ParentChildDesginComponent implements OnInit {
  
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

  constructor() { }

  ngOnInit(): void {
  }

}