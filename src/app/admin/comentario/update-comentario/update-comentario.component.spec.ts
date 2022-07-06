import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateComentarioComponent } from './update-comentario.component';

describe('UpdateComentarioComponent', () => {
  let component: UpdateComentarioComponent;
  let fixture: ComponentFixture<UpdateComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateComentarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
