import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from 'src/app/shared/components/details/details.component';
import { SolutionTwoComponent } from './solution-two.component';

const routes: Routes = [
  {
    path: '', 
    component: SolutionTwoComponent,
    data: { alwaysRefresh: true },
    children: [
      {
        path: 'detail/:displayName/:detailId',
        component: DetailsComponent,
        data: { alwaysRefresh: true }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwoRoutingModule { }
