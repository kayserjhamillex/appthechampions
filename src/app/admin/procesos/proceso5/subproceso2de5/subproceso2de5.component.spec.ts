import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subproceso2de5Component } from './subproceso2de5.component';

describe('Subproceso2de5Component', () => {
  let component: Subproceso2de5Component;
  let fixture: ComponentFixture<Subproceso2de5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subproceso2de5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subproceso2de5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
