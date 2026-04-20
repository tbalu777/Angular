import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightCounter } from './right-counter';

describe('RightCounter', () => {
  let component: RightCounter;
  let fixture: ComponentFixture<RightCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RightCounter],
    }).compileComponents();

    fixture = TestBed.createComponent(RightCounter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
