import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentChildDesginComponent } from './parent-child-desgin.component';
import { ParentChildDesignSolutionOneComponent } from './parent-child-design-solution-one/parent-child-design-solution-one.component';

const routes: Routes = [
  {
    path: '',
    component: ParentChildDesginComponent,
    children: [
      { 
        path: 'parent-child-design-solution-one',
        component: ParentChildDesignSolutionOneComponent,
        outlet: 'solution-one'
      },
      { 
        path: 'parent-child-design-solution-two',
        loadChildren: () => import('./child-design-solution-two/child-design-solution-two.module').then(m => m.ChildDesignSolutionTwoModule),
        outlet: 'solution-two'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentChildDesginRoutingModule { }
