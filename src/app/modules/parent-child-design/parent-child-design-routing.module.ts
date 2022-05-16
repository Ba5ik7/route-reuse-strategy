import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentChildDesignComponent } from './parent-child-design.component';

const routes: Routes = [
  {
    path: '',
    component: ParentChildDesignComponent,
    children: [
      { 
        path: 'parent-child-design-solution-one',
        loadChildren: () => import('./parent-child-design-solution-one/parent-child-design-solution-one.module').then(m => m.ParentChildDesignSolutionOneModule),
        outlet: 'solution-one'
      },
      { 
        path: 'parent-child-design-solution-two',
        loadChildren: () => import('./parent-child-design-solution-two/parent-child-design-solution-two.module').then(m => m.ParentChildDesignSolutionTwoModule),
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
export class ParentChildDesignRoutingModule { }
