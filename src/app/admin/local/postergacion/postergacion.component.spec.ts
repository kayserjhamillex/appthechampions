import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostergacionComponent } from './postergacion.component';

describe('PostergacionComponent', () => {
  let component: PostergacionComponent;
  let fixture: ComponentFixture<PostergacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostergacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostergacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
