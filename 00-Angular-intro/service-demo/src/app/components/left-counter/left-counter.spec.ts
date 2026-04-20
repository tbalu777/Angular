import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftCounter } from './left-counter';

describe('LeftCounter', () => {
  let component: LeftCounter;
  let fixture: ComponentFixture<LeftCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftCounter],
    }).compileComponents();

    fixture = TestBed.createComponent(LeftCounter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
