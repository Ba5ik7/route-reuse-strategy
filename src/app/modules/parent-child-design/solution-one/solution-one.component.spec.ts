import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionOneComponent } from './solution-one.component';

describe('SolutionOneComponent', () => {
  let component: SolutionOneComponent;
  let fixture: ComponentFixture<SolutionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
