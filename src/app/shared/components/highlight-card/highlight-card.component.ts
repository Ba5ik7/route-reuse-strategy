import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { HighlightLoader } from 'ngx-highlightjs';

@Component({
  selector: 'highlight-card',
  templateUrl: './highlight-card.component.html',
  styleUrls: ['./highlight-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HighlightCardComponent {

  @Input() code: string = '';

  themeMap: Map<string, string> = new Map([
    ['gradient-dark', 'assets/css/highlight-themes/gradient-dark.css'],
    ['github-dark', 'assets/css/highlight-themes/github-dark.css'],
    ['github', 'assets/css/highlight-themes/github.css']
  ]);

  constructor(private hljsLoader: HighlightLoader) { }

  changeTheme(themeColor: string): void {
    const themePath = this.themeMap.get(themeColor) ?? 'gradient-dark';
    this.hljsLoader.setTheme(themePath);
  }
}
