import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTestimonioComponent } from './list-testimonio.component';

describe('ListTestimonioComponent', () => {
  let component: ListTestimonioComponent;
  let fixture: ComponentFixture<ListTestimonioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTestimonioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTestimonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
