import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subproceso1de8Component } from './subproceso1de8.component';

describe('Subproceso1de8Component', () => {
  let component: Subproceso1de8Component;
  let fixture: ComponentFixture<Subproceso1de8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subproceso1de8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subproceso1de8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
