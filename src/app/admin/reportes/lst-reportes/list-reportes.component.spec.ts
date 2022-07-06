import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReportesComponent } from './list-reportes.component';

describe('LstReportesComponent', () => {
  let component: ListReportesComponent;
  let fixture: ComponentFixture<ListReportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReportesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
