import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';

import { HighlightCardModule } from 'src/app/shared/components/highlight-card/highlight-card.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    HighlightCardModule,
    MatCardModule,
    MatIconModule
  ]
})
export class OverviewModule { }
