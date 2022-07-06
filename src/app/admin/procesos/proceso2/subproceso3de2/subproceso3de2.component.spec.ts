import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subproceso3de2Component } from './subproceso3de2.component';

describe('Subproceso3de2Component', () => {
  let component: Subproceso3de2Component;
  let fixture: ComponentFixture<Subproceso3de2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subproceso3de2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subproceso3de2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
