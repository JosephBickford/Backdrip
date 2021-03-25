import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  posts: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.posts = db
      .collection('backdrops', (ref) => ref.orderBy('timeStamp', 'desc'))
      .valueChanges();
  }

  like(docID) {
    var docRef = this.db.collection('backdrops').doc(docID);

    docRef.update({
      likes: firebase.default.firestore.FieldValue.increment(1),
    });
  }

  ngOnInit(): void {}
}
