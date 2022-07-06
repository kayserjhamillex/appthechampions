import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmpresaComponent } from './view-empresa.component';

describe('ViewEmpresaComponent', () => {
  let component: ViewEmpresaComponent;
  let fixture: ComponentFixture<ViewEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
