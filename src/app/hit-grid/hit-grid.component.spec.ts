import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitGridComponent } from './hit-grid.component';

describe('HitGridComponent', () => {
  let component: HitGridComponent;
  let fixture: ComponentFixture<HitGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HitGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HitGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
