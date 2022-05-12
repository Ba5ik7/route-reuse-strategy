import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentChildDesginComponent } from './parent-child-desgin.component';

const routes: Routes = [{ path: '', component: ParentChildDesginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentChildDesginRoutingModule { }
