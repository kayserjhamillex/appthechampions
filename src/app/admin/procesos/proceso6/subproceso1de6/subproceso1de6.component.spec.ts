import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subproceso1de6Component } from './subproceso1de6.component';

describe('Subproceso1de6Component', () => {
  let component: Subproceso1de6Component;
  let fixture: ComponentFixture<Subproceso1de6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subproceso1de6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subproceso1de6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
