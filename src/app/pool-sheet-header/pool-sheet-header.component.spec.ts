import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolSheetHeaderComponent } from './pool-sheet-header.component';

describe('PoolSheetHeaderComponent', () => {
  let component: PoolSheetHeaderComponent;
  let fixture: ComponentFixture<PoolSheetHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolSheetHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoolSheetHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
