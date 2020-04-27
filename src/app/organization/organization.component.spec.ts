import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationComponent } from './organization.component';
// import { RouterTestingModule } from '@angular/router/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import { Organization } from '@nqframework/models';

describe('OrganizationComponent', () => {
  let component: OrganizationComponent;
  let fixture: ComponentFixture<OrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // imports: [RouterTestingModule],
      providers: [
        {
          provide: AngularFirestore,
          useValue: jasmine.createSpyObj(['collection']),
        },
        {
          provide: AngularFireAuth,
          useValue: { authState: new Subject() },
        },
      ],
      declarations: [OrganizationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {});

  it('should create', () => {
    fixture = TestBed.createComponent(OrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
  it('should get all organizations for user', async(async () => {
    const mockOrganizations: Organization[] = [
      {
        name: 'Organization name',
        email: 'organization@email.com',
        members: [
          {
            uid: 'user id',
            displayName: 'user',
            email: 'user@user.com',
            status: 'accepted',
            role: 'admin',
          },
        ],
        memberIds: ['user id'],
        address1: '',
        address2: '',
        country: '',
      },
    ];
    const auth: any = TestBed.inject(AngularFireAuth);

    const firestore: any = TestBed.inject(AngularFirestore);
    const valueChangesSpy = jasmine.createSpyObj(['valueChanges']);
    valueChangesSpy.valueChanges.and.returnValue(of(mockOrganizations));
    firestore.collection.and.callFake((path, ref) => {
      expect(path).toEqual('organizations');
      const refSpy = jasmine.createSpyObj(['where']);
      ref(refSpy);
      expect(refSpy.where).toHaveBeenCalledWith(
        'memberIds',
        'array-contains',
        'user id',
      );
      return valueChangesSpy;
    });
    fixture = TestBed.createComponent(OrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.organizations$.pipe(first()).subscribe((orgs) => {
      expect(orgs).toEqual(mockOrganizations);
    });
    await fixture.whenStable();
    auth.authState.next({ uid: 'user id' });
    expect(firestore.collection).toHaveBeenCalledWith(
      'organizations',
      jasmine.any(Function),
    );
    firestore.collection.calls.reset();
    component.organizations$.pipe(first()).subscribe((orgs) => {
      expect(orgs).toEqual([]);
    });
    auth.authState.next(null);
  }));
});
