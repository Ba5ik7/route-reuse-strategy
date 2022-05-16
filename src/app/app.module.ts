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
    MatToolbarModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        // fullLibraryLoader: () => import('highlight.js'),
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        // lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript')
        },
        themePath: 'assets/css/highlight-themes/gradient-dark.css' // Optional, and useful if you want to change the theme dynamically
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
