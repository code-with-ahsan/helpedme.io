import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelperCardComponent } from './components/helper-card/helper-card.component';
import { RouterModule } from '@angular/router';
import { AddFeedbackModalComponent } from './components/add-feedback-modal/add-feedback-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HelperCardComponent, AddFeedbackModalComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [HelperCardComponent, AddFeedbackModalComponent],
})
export class SharedModule {}
