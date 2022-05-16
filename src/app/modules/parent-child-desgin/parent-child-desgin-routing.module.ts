import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentChildDesginComponent } from './parent-child-desgin.component';

const routes: Routes = [
  {
    path: '',
    component: ParentChildDesginComponent,
    children: [
      { 
        path: 'parent-child-design-solution-one',
        loadChildren: () => import('./parent-child-design-solution-one/parent-child-design-solution-one.module').then(m => m.ParentChildDesignSolutionOneModule),
        outlet: 'solution-one'
      },
      { 
        path: 'parent-child-design-solution-two',
        loadChildren: () => import('./child-design-solution-two/child-design-solution-two.module').then(m => m.ChildDesignSolutionTwoModule),
        outlet: 'solution-two'
      },
      { 
        path: 'parent-child-design-solution-three',
        loadChildren: () => import('./parent-child-design-solution-three/parent-child-design-solution-three.module').then(m => m.ParentChildDesignSolutionThreeModule),
        outlet: 'solution-three'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentChildDesginRoutingModule { }
