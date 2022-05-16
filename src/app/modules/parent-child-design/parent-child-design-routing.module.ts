import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentChildDesignComponent } from './parent-child-design.component';

const routes: Routes = [
  {
    path: '',
    component: ParentChildDesignComponent,
    children: [
      { 
        path: 'solution-one',
        loadChildren: () => import('./solution-one/solution-one.module').then(m => m.SolutionOneModule),
        outlet: 'solution-one'
      },
      { 
        path: 'solution-two',
        loadChildren: () => import('./solution-two/solution-two.module').then(m => m.SolutionTwoModule),
        outlet: 'solution-two'
      },
      { 
        path: 'solution-three',
        loadChildren: () => import('./solution-three/solution-three.module').then(m => m.SolutionThreeModule),
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
