import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentChildDesignSolutionOneComponent } from './parent-child-design-solution-one.component';

const routes: Routes = [{ path: '', component: ParentChildDesignSolutionOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentChildDesignSolutionOneRoutingModule { }
