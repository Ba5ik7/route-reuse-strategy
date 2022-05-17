import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchDetailRoutingModule } from './search-detail-routing.module';
import { SearchDetailComponent } from './search-detail.component';
import { MatCardModule } from '@angular/material/card';
import { HighlightCardModule } from 'src/app/shared/components/highlight-card/highlight-card.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    SearchDetailComponent
  ],
  imports: [
    CommonModule,
    SearchDetailRoutingModule,
    HighlightCardModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ]
})
export class SearchDetailModule { }
