import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subproceso3de6Component } from './subproceso3de6.component';

describe('Subproceso3de6Component', () => {
  let component: Subproceso3de6Component;
  let fixture: ComponentFixture<Subproceso3de6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subproceso3de6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subproceso3de6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
