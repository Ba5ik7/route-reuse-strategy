import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildDesignSolutionThreeComponent } from './parent-child-design-solution-three.component';

describe('ParentChildDesignSolutionThreeComponent', () => {
  let component: ParentChildDesignSolutionThreeComponent;
  let fixture: ComponentFixture<ParentChildDesignSolutionThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentChildDesignSolutionThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChildDesignSolutionThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
