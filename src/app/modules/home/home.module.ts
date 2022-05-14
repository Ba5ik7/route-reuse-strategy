import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { HighlightCardModule } from 'src/app/shared/components/highlight-card/highlight-card.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HighlightCardModule,
    MatCardModule
  ]
})
export class HomeModule { }
