import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildDesginComponent } from './parent-child-design.component';

describe('ParentChildDesginComponent', () => {
  let component: ParentChildDesginComponent;
  let fixture: ComponentFixture<ParentChildDesginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentChildDesginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChildDesginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
