import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildDesignSolutionOneComponent } from './parent-child-design-solution-one.component';

describe('ParentChildDesignSolutionOneComponent', () => {
  let component: ParentChildDesignSolutionOneComponent;
  let fixture: ComponentFixture<ParentChildDesignSolutionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentChildDesignSolutionOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChildDesignSolutionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
