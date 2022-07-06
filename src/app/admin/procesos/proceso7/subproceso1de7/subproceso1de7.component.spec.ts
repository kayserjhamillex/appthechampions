import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subproceso1de7Component } from './subproceso1de7.component';

describe('Subproceso1de7Component', () => {
  let component: Subproceso1de7Component;
  let fixture: ComponentFixture<Subproceso1de7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subproceso1de7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subproceso1de7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
