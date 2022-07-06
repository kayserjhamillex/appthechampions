import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subproceso2Component } from './subproceso2.component';

describe('Subproceso2Component', () => {
  let component: Subproceso2Component;
  let fixture: ComponentFixture<Subproceso2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subproceso2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subproceso2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
