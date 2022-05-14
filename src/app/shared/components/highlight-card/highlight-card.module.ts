import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightCardComponent } from './highlight-card.component';

import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  declarations: [HighlightCardComponent],
  imports: [
    CommonModule,
    HighlightModule
  ],
  exports: [
    HighlightCardComponent
  ],
})
export class HighlightCardModule { }
