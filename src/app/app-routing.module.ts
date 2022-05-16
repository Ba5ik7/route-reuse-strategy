import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/overview/overview.module').then(m => m.OverviewModule) },
  { path: 'overview', loadChildren: () => import('./modules/overview/overview.module').then(m => m.OverviewModule) },
  { path: 'parent-child-design', loadChildren: () => import('./modules/parent-child-desgin/parent-child-desgin.module').then(m => m.ParentChildDesginModule) },
  { path: 'search-detail', loadChildren: () => import('./modules/search-detail/search-detail.module').then(m => m.SearchDetailModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
