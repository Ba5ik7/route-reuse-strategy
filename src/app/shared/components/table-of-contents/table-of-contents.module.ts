import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableOfContentsComponent } from './table-of-contents.component';



@NgModule({
  declarations: [TableOfContentsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TableOfContentsComponent
  ],
})
export class TableOfContentsModule { }
