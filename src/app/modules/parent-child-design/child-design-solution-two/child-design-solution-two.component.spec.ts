import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDesignSolutionTwoComponent } from './child-design-solution-two.component';

describe('ChildDesignSolutionTwoComponent', () => {
  let component: ChildDesignSolutionTwoComponent;
  let fixture: ComponentFixture<ChildDesignSolutionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildDesignSolutionTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildDesignSolutionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
