import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user$: Observable<firebase.User | null>;
  menuOpen = false;
  constructor(private auth: AngularFireAuth) {
    this.user$ = this.auth.user;
  }

  ngOnInit(): void {}

  toggleDropdownMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logOut() {
    console.log('logout please');
    this.auth.signOut();
  }
}
