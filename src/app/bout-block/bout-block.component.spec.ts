import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutBlockComponent } from './bout-block.component';

describe('BoutBlockComponent', () => {
  let component: BoutBlockComponent;
  let fixture: ComponentFixture<BoutBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
