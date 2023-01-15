import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolSheetComponent } from './pool-sheet.component';

describe('PoolSheetComponent', () => {
  let component: PoolSheetComponent;
  let fixture: ComponentFixture<PoolSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoolSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
