import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subproceso1de3Component } from './subproceso1de3.component';

describe('Subproceso1de3Component', () => {
  let component: Subproceso1de3Component;
  let fixture: ComponentFixture<Subproceso1de3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subproceso1de3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subproceso1de3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
