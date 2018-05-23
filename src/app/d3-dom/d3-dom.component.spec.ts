import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3DomComponent } from './d3-dom.component';

describe('D3DomComponent', () => {
  let component: D3DomComponent;
  let fixture: ComponentFixture<D3DomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3DomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3DomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
