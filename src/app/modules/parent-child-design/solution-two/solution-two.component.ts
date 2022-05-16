import { Component } from '@angular/core';
import { AbstractMasterComponent } from 'src/app/shared/abstractions/abstract-master.component';
@Component({
  selector: 'parent-child-design-solution-two',
  templateUrl: './solution-two.component.html',
  styleUrls: ['./solution-two.component.scss']
})
export class SolutionTwoComponent extends AbstractMasterComponent {
  displayName: string = 'Solution Two';

  constructor() { super(); }

}
