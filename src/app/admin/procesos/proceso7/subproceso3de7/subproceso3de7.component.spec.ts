import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subproceso3de7Component } from './subproceso3de7.component';

describe('Subproceso3de7Component', () => {
  let component: Subproceso3de7Component;
  let fixture: ComponentFixture<Subproceso3de7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subproceso3de7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subproceso3de7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
