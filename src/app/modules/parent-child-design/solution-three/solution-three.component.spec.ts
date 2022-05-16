import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionThreeComponent } from './solution-three.component';

describe('SolutionThreeComponent', () => {
  let component: SolutionThreeComponent;
  let fixture: ComponentFixture<SolutionThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
