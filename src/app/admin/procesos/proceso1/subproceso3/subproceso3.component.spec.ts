import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subproceso3Component } from './subproceso3.component';

describe('Subproceso3Component', () => {
  let component: Subproceso3Component;
  let fixture: ComponentFixture<Subproceso3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subproceso3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subproceso3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
