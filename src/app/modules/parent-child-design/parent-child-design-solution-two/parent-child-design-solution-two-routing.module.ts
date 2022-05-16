import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from 'src/app/shared/components/details/details.component';
import { ParentChildDesignSolutionTwoComponent } from './parent-child-design-solution-two.component';

const routes: Routes = [
  {
    path: '', 
    component: ParentChildDesignSolutionTwoComponent,
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
export class ParentChildDesignSolutionTwoRoutingModule { }
