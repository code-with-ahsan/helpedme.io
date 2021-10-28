import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import IHelper from '../core/interfaces/helper.interface';
import { HelperService } from '../core/services/helper.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user$: Observable<IHelper | null> = this.helperService.selectedHelper$;
  constructor(private readonly helperService: HelperService) {}

  ngOnInit(): void {}
}
