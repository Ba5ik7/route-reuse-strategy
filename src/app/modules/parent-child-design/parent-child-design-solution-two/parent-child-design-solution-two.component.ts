import { Component } from '@angular/core';
import { AbstractMasterComponent } from 'src/app/shared/abstractions/abstract-master.component';
@Component({
  selector: 'app-child-design-solution-two',
  templateUrl: './parent-child-design-solution-two.component.html',
  styleUrls: ['./parent-child-design-solution-two.component.scss']
})
export class ParentChildDesignSolutionTwoComponent extends AbstractMasterComponent {
  displayName: string = 'Solution Two';

  constructor() { super(); }

}
