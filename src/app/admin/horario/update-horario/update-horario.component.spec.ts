import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHorarioComponent } from './update-horario.component';

describe('UpdateHorarioComponent', () => {
  let component: UpdateHorarioComponent;
  let fixture: ComponentFixture<UpdateHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHorarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
