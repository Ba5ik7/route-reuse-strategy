import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractMasterComponent } from 'src/app/shared/abstractions/abstract-master.component';

@Component({
  selector: 'parent-child-design-solution-one',
  templateUrl: './solution-one.component.html'
})
export class SolutionOneComponent extends AbstractMasterComponent {
  displayName: string = 'Solution One';

  constructor() { super(); }

}
