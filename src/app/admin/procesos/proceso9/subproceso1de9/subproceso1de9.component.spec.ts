import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subproceso1de9Component } from './subproceso1de9.component';

describe('Subproceso1de9Component', () => {
  let component: Subproceso1de9Component;
  let fixture: ComponentFixture<Subproceso1de9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subproceso1de9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subproceso1de9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
