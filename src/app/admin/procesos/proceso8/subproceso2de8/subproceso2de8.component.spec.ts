import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subproceso2de8Component } from './subproceso2de8.component';

describe('Subproceso2de8Component', () => {
  let component: Subproceso2de8Component;
  let fixture: ComponentFixture<Subproceso2de8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subproceso2de8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subproceso2de8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
