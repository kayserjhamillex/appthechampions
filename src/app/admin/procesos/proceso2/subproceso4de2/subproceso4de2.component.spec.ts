import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subproceso4de2Component } from './subproceso4de2.component';

describe('Subproceso4de2Component', () => {
  let component: Subproceso4de2Component;
  let fixture: ComponentFixture<Subproceso4de2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subproceso4de2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subproceso4de2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
