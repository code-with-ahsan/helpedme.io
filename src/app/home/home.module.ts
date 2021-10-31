import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FirebaseAppModule } from '@angular/fire/app';
import { FirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FirebaseAppModule,
    AngularFireAuthModule,
    FirestoreModule,
  ],
})
export class HomeModule {}
