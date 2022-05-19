import { Component, Renderer2, ViewChild } from '@angular/core';
import { TableOfContentsComponent } from './shared/components/table-of-contents/table-of-contents.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  @ViewChild('toc') tableOfContents!: TableOfContentsComponent;

  constructor(private renderer: Renderer2) {
  }

  onRouterOutletActivate():void {
    const page = this.renderer.selectRootElement('.page', true);
    this.updateTableOfContents('HELLO WORLD', page);
  }

  updateTableOfContents(sectionName: string, docViewerContent: HTMLElement, sectionIndex = 0) {    
    if (this.tableOfContents) {
      this.tableOfContents.addHeaders(sectionName, docViewerContent, sectionIndex);
      this.tableOfContents.updateScrollPosition();
    }
  }
}
