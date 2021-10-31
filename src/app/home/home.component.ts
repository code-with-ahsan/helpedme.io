import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import IHelper from '../core/interfaces/helper.interface';
import { HelperService } from '../core/services/helper.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
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
    private router: Router,
    public auth: AngularFireAuth
  ) {}

  ngOnInit(): void {}

  async setShowAddModal(show: boolean) {
    const user = await this.auth.currentUser;
    if (!user) {
      const credentials = await this.login();
      if (!credentials) {
        return;
      }
    }
    this.showAddModal = show;
  }

  login() {
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }

  showHelper(helper: IHelper) {
    this.helperService.setSelectedHelper(helper);
    this.router.navigate([`/user/${helper.username}`]);
  }
}
