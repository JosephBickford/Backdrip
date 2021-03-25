import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadPageComponent } from './upload-page/upload-page.component';

import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [UploadPageComponent],
  imports: [
    CommonModule,
    UploadRoutingModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireModule,
    MatButtonModule,
  ],
})
export class UploadModule {}
