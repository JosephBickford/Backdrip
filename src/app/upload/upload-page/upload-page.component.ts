import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss'],
})
export class UploadPageComponent {
  path: string;
  title: string;
  downloadUrl: Observable<string>;
  posted: boolean;

  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage,
    public afAuth: AngularFireAuth
  ) {}

  upload($event) {
    //set path to file on change
    this.path = $event.target.files[0];
  }

  uploadToFirebase(url, title, desc, userName) {
    const docRef = this.db.collection('backdrops').doc();

    this.db
      .collection('backdrops')
      .doc(docRef.ref.id)
      .set({
        title: title,
        imgUrl: url,
        likes: 0,
        docId: docRef.ref.id,
        timeStamp: new Date(),
        description: desc,
        userName: userName,
      })
      .then(() => (this.posted = true));
  }

  uploadImage(title, desc, userName) {
    const ref = this.storage.ref(`images/${title}`);
    const uploadTask = ref.put(this.path).then(() => {
      const downloadUrl = ref.getDownloadURL();
      downloadUrl.subscribe((url) => {
        this.uploadToFirebase(url, title, desc, userName);
      });
    });
  }
}
