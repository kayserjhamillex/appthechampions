import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTestimonioComponent } from './update-testimonio.component';

describe('UpdateTestimonioComponent', () => {
  let component: UpdateTestimonioComponent;
  let fixture: ComponentFixture<UpdateTestimonioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTestimonioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTestimonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
