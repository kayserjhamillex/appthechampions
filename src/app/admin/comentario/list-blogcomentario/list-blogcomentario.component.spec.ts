import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBlogcomentarioComponent } from './list-blogcomentario.component';

describe('ListBlogcomentarioComponent', () => {
  let component: ListBlogcomentarioComponent;
  let fixture: ComponentFixture<ListBlogcomentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBlogcomentarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBlogcomentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
