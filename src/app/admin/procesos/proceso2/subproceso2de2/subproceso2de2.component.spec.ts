import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subproceso2de2Component } from './subproceso2de2.component';

describe('Subproceso2de2Component', () => {
  let component: Subproceso2de2Component;
  let fixture: ComponentFixture<Subproceso2de2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subproceso2de2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subproceso2de2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
