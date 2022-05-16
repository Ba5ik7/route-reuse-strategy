import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from 'src/app/shared/components/details/details.component';
import { ParentChildDesignSolutionOneComponent } from './parent-child-design-solution-one.component';

const routes: Routes = [
  {
    path: '', 
    component: ParentChildDesignSolutionOneComponent,
    children: [
      {
          path: 'detail/:detailId',
          component: DetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentChildDesignSolutionOneRoutingModule { }
