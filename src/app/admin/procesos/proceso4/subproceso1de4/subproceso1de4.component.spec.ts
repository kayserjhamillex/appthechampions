import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subproceso1de4Component } from './subproceso1de4.component';

describe('Subproceso1de4Component', () => {
  let component: Subproceso1de4Component;
  let fixture: ComponentFixture<Subproceso1de4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subproceso1de4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subproceso1de4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
