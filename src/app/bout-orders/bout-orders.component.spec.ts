import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutOrdersComponent } from './bout-orders.component';

describe('BoutOrdersComponent', () => {
  let component: BoutOrdersComponent;
  let fixture: ComponentFixture<BoutOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
