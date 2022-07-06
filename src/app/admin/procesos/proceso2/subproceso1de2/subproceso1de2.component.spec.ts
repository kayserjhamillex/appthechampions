import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subproceso1de2Component } from './subproceso1de2.component';

describe('Subproceso1de2Component', () => {
  let component: Subproceso1de2Component;
  let fixture: ComponentFixture<Subproceso1de2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subproceso1de2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subproceso1de2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
