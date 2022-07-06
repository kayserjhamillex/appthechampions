import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subproceso2de6Component } from './subproceso2de6.component';

describe('Subproceso2de6Component', () => {
  let component: Subproceso2de6Component;
  let fixture: ComponentFixture<Subproceso2de6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subproceso2de6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subproceso2de6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
