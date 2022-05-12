import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchDetailRoutingModule } from './search-detail-routing.module';
import { SearchDetailComponent } from './search-detail.component';


@NgModule({
  declarations: [
    SearchDetailComponent
  ],
  imports: [
    CommonModule,
    SearchDetailRoutingModule
  ]
})
export class SearchDetailModule { }
