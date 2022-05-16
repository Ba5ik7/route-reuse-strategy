import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildDesignComponent } from './parent-child-design.component';

describe('ParentChildDesignComponent', () => {
  let component: ParentChildDesignComponent;
  let fixture: ComponentFixture<ParentChildDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentChildDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChildDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
