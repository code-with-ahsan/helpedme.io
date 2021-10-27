import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-feedback-modal',
  templateUrl: './add-feedback-modal.component.html',
  styleUrls: ['./add-feedback-modal.component.scss'],
})
export class AddFeedbackModalComponent implements OnInit {
  @Output() modalClosed = new EventEmitter();
  searchTerm = '';
  constructor() {}

  ngOnInit(): void {}

  closeHandler() {
    this.modalClosed.emit();
  }
}
