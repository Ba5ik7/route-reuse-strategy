import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchDetailComponent } from './search-detail.component';

const routes: Routes = [{ path: '', component: SearchDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchDetailRoutingModule { }
