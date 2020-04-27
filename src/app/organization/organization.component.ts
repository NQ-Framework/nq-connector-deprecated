import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap, share } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Organization } from '@nqframework/models';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss'],
})
export class OrganizationComponent implements OnInit {
  organizations$: Observable<Organization[]>;
  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth,
  ) {}
  ngOnInit() {
    this.organizations$ = this.auth.authState.pipe(
      share(),
      switchMap((user) => {
        if (!user) {
          return of([]);
        }
        console.log('uid je', user.uid);
        return this.firestore
          .collection<Organization>('organizations', (ref) =>
            ref.where('memberIds', 'array-contains', user.uid),
          )
          .valueChanges();
      }),
    );

    this.organizations$.subscribe((val) => {
      console.log(val);
    });
  }
}
