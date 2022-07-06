import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subproceso3de3Component } from './subproceso3de3.component';

describe('Subproceso3de3Component', () => {
  let component: Subproceso3de3Component;
  let fixture: ComponentFixture<Subproceso3de3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subproceso3de3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subproceso3de3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
