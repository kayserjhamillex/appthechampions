import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subproceso1Component } from './subproceso1.component';

describe('Subproceso1Component', () => {
  let component: Subproceso1Component;
  let fixture: ComponentFixture<Subproceso1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subproceso1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subproceso1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
