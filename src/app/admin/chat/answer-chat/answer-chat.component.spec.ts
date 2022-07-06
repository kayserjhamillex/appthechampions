import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerChatComponent } from './answer-chat.component';

describe('AnswerChatComponent', () => {
  let component: AnswerChatComponent;
  let fixture: ComponentFixture<AnswerChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
