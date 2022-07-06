import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subproceso2de3Component } from './subproceso2de3.component';

describe('Subproceso2de3Component', () => {
  let component: Subproceso2de3Component;
  let fixture: ComponentFixture<Subproceso2de3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subproceso2de3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subproceso2de3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
