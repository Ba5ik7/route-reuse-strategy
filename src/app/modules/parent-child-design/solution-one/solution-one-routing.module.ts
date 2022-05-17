import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from 'src/app/shared/components/details/details.component';
import { SolutionOneComponent } from './solution-one.component';

const routes: Routes = [
  {
    path: '', 
    component: SolutionOneComponent,
    children: [
      {
        path: 'detail/:appName/:detailId',
        component: DetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionOneRoutingModule { }
