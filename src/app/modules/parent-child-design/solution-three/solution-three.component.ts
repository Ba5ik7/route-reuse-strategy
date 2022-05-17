import { Component } from '@angular/core';
import { AbstractMasterComponent } from 'src/app/shared/abstractions/abstract-master.component';

@Component({
  selector: 'parent-child-design-solution-three',
  templateUrl: './solution-three.component.html',
  styleUrls: ['./solution-three.component.scss']
})
export class SolutionThreeComponent extends AbstractMasterComponent {
  displayName: string = 'Solution Three';

  constructor() { super(); }

}

