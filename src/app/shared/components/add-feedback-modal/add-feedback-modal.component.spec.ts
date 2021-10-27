import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFeedbackModalComponent } from './add-feedback-modal.component';

describe('AddFeedbackModalComponent', () => {
  let component: AddFeedbackModalComponent;
  let fixture: ComponentFixture<AddFeedbackModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFeedbackModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFeedbackModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
