import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentChildDesginRoutingModule } from './parent-child-design-routing.module';
import { ParentChildDesignComponent } from './parent-child-design.component';
import { HighlightCardModule } from 'src/app/shared/components/highlight-card/highlight-card.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ParentChildDesignComponent
  ],
  imports: [
    CommonModule,
    ParentChildDesginRoutingModule,
    HighlightCardModule,
    MatCardModule,
    MatIconModule
  ]
})
export class ParentChildDesignModule { }
