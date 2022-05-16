import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildDesignSolutionTwoComponent } from './parent-child-design-solution-two.component';

describe('ParentChildDesignSolutionTwoComponent', () => {
  let component: ParentChildDesignSolutionTwoComponent;
  let fixture: ComponentFixture<ParentChildDesignSolutionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentChildDesignSolutionTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChildDesignSolutionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
