import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildDesignSolutionTwoComponent } from './child-design-solution-two.component';

const routes: Routes = [{ path: '', component: ChildDesignSolutionTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildDesignSolutionTwoRoutingModule { }
