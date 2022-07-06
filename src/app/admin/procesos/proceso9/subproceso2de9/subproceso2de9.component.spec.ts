import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subproceso2de9Component } from './subproceso2de9.component';

describe('Subproceso2de9Component', () => {
  let component: Subproceso2de9Component;
  let fixture: ComponentFixture<Subproceso2de9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subproceso2de9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subproceso2de9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
