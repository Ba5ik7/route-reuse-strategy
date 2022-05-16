import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentChildDesignRoutingModule } from './parent-child-design-routing.module';
import { ParentChildDesignComponent } from './parent-child-design.component';

import { HighlightCardModule } from 'src/app/shared/components/highlight-card/highlight-card.module';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ParentChildDesignComponent
  ],
  imports: [
    CommonModule,
    ParentChildDesignRoutingModule,
    HighlightCardModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ParentChildDesignModule { }
