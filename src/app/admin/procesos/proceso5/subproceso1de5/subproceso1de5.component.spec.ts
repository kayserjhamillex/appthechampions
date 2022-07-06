import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subproceso1de5Component } from './subproceso1de5.component';

describe('Subproceso1de5Component', () => {
  let component: Subproceso1de5Component;
  let fixture: ComponentFixture<Subproceso1de5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subproceso1de5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subproceso1de5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
