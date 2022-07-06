import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subproceso2de7Component } from './subproceso2de7.component';

describe('Subproceso2de7Component', () => {
  let component: Subproceso2de7Component;
  let fixture: ComponentFixture<Subproceso2de7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subproceso2de7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subproceso2de7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
