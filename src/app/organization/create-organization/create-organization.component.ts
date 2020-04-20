import { Component, OnInit } from '@angular/core';
import { Organization } from '@nqframework/models';
import { FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { first, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.scss'],
})
export class CreateOrganizationComponent implements OnInit {
  organizationForm = this.fb.group({
    name: [''],
    address1: [''],
    address2: [''],
    email: [''],
    country: [''],
  });
  constructor(
    private fb: FormBuilder,
    private firestore: AngularFirestore,
    private auth: AngularFireAuth,
    private router: Router,
  ) {}
  ngOnInit() {}

  submitForm() {
    this.auth.user
      .pipe(
        first(),
        map((u) => u.uid),
      )
      .subscribe((uid) => {
        const docValues = this.organizationForm.value;
        const t = this.firestore.collection('omg');
        t.add({});
        this.firestore
          .collection<Organization>('organizations')
          .add({ ...docValues, members: [uid], createdBy: uid });
        this.router.navigate(['organization']);
      });
  }
}
