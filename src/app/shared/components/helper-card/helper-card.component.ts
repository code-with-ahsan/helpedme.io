import { Component, Input, OnInit } from '@angular/core';
import IHelper from 'src/app/core/interfaces/helper.interface';

@Component({
  selector: 'app-helper-card[helper]',
  templateUrl: './helper-card.component.html',
  styleUrls: ['./helper-card.component.scss'],
})
export class HelperCardComponent implements OnInit {
  @Input() helper: IHelper | undefined;
  helpedAvatarLimit = 4;
  helpedCount = 0;
  helpedAvatars: Array<Partial<IHelper>> = [];
  constructor() {}

  ngOnInit(): void {
    this.helpedCount = this.helper!.helped.length - this.helpedAvatarLimit;
    this.helpedAvatars =
      this.helpedCount > 0
        ? this.helper!.helped.slice(0, this.helpedAvatarLimit)
        : this.helper!.helped;
  }
}
