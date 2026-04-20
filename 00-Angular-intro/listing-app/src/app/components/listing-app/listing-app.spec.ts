import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingApp } from './listing-app';

describe('ListingApp', () => {
  let component: ListingApp;
  let fixture: ComponentFixture<ListingApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListingApp],
    }).compileComponents();

    fixture = TestBed.createComponent(ListingApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
