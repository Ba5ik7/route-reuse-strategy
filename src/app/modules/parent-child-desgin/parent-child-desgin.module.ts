import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentChildDesginRoutingModule } from './parent-child-desgin-routing.module';
import { ParentChildDesginComponent } from './parent-child-desgin.component';
import { HighlightCardModule } from 'src/app/shared/components/highlight-card/highlight-card.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ParentChildDesginComponent
  ],
  imports: [
    CommonModule,
    ParentChildDesginRoutingModule,
    HighlightCardModule,
    MatCardModule,
    MatIconModule
  ]
})
export class ParentChildDesginModule { }
