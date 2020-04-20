import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { first, flatMap, tap, single } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

interface Item {
  name: string;
  id: number;
  returnValue: string;
  firebaseId: string;
}

/* istanbul ignore file */
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  pendingDocuments$: BehaviorSubject<Item[]> = new BehaviorSubject([]);
  retVal = 'OMG WTF BBQ';
  constructor(private firestore: AngularFirestore) {}
  ngOnInit(): void {
    this.firestore
      .collection<Item>('items', (ref) => ref.where('returnValue', '==', null))
      .valueChanges()
      .pipe(tap((values) => this.pendingDocuments$.next(values)))
      .subscribe();
  }

  sendData(id: number) {
    console.log('finding by id: ', id);
    this.firestore
      .collection<Item>('items', (ref) => ref.where('id', '==', id))
      .valueChanges({ idField: 'firebaseId' })
      .pipe(first())
      .subscribe((docs) => {
        console.log('got back: ', docs);
        this.firestore
          .doc('items/' + docs[0].firebaseId)
          .update({ returnValue: this.retVal });
      });
  }
}
