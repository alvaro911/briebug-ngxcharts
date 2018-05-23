import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieChartComponent } from './movie-chart.component';

describe('MovieChartComponent', () => {
  let component: MovieChartComponent;
  let fixture: ComponentFixture<MovieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
