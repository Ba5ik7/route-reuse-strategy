import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HIGHLIGHT_OPTIONS, HighlightOptions } from 'ngx-highlightjs';
import { DetailsComponent } from './shared/components/details/details.component';
import { RouteReuseStrategy } from '@angular/router';
import { AppReuseStrategy } from './app-reuse.strategy';
import { TableOfContentsModule } from './shared/components/table-of-contents/table-of-contents.module';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    TableOfContentsModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript')
        },
        themePath: 'assets/css/highlight-themes/gradient-dark.css'
      }
    },
    {
      provide: RouteReuseStrategy,
      useClass: AppReuseStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
