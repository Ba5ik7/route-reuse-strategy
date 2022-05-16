import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractMasterComponent } from 'src/app/shared/abstractions/abstract-master.component';

@Component({
  selector: 'app-parent-child-design-solution-one',
  templateUrl: './parent-child-design-solution-one.component.html',
  styleUrls: ['./parent-child-design-solution-one.component.scss']
})
export class ParentChildDesignSolutionOneComponent extends AbstractMasterComponent {
  displayName: string = 'Solution One';

  constructor() { super(); }

}
