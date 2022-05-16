import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolutionThreeComponent } from './solution-three.component';

const routes: Routes = [{ path: '', component: SolutionThreeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionThreeRoutingModule { }
