import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap, share } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Organization } from '@nqframework/models';
import { fuzzyMatch } from '../common/search';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss'],
})
export class OrganizationComponent implements OnInit {
  organizations$: Observable<Organization[]>;
  selected: string[];
  results: string[];

  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth,
  ) {}

  // search(event) {
  //   const options = [
  //     'milos spasojevic',
  //     'ljuba cvetkovic',
  //     'aleksandar sadzak',
  //     'andrijana radomirovic',
  //     'maja spasojevic',
  //     'anika spasojevic',
  //     'ljubisa cvetkovic',
  //   ];
  //   this.results = options
  //     .map((o) => ({ result: fuzzyMatch(event.query, o), value: o }))
  //     .filter((o) => o.result[0] && !this.selected?.includes(o.value))
  //     .sort((a, b) => b.result[1] - a.result[1])
  //     .map((o) => o.value);
  // }

  ngOnInit() {
    this.organizations$ = this.auth.authState.pipe(
      share(),
      switchMap((user) => {
        if (!user) {
          return of([]);
        }
        return this.firestore
          .collection<Organization>('organizations', (ref) =>
            ref.where('memberIds', 'array-contains', user.uid),
          )
          .valueChanges();
      }),
    );
  }
}
