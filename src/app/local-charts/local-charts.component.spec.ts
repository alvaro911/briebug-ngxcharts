import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalChartsComponent } from './local-charts.component';

describe('LocalChartsComponent', () => {
  let component: LocalChartsComponent;
  let fixture: ComponentFixture<LocalChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
