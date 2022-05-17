import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from 'src/app/shared/components/details/details.component';
import { SolutionThreeComponent } from './solution-three.component';

const routes: Routes = [
  {
    path: '', 
    component: SolutionThreeComponent,
    children: [
      {
        path: 'detail/:appName/:detailId',
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
export class SolutionThreeRoutingModule { }
