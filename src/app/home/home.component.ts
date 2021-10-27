import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import IHelper from '../core/interfaces/helper.interface';
import { HelperService } from '../core/services/helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showAddModal = false;
  users$: Observable<Array<IHelper>> = this.helperService.helpers$;
  constructor(
    private readonly helperService: HelperService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  setShowAddModal(show: boolean) {
    this.showAddModal = show;
  }

  showHelper(helper: IHelper) {
    this.helperService.setSelectedHelper(helper);
    this.router.navigate([`/user/${helper.username}`]);
  }
}
