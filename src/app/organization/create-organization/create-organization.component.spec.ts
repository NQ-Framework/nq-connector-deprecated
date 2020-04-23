import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateOrganizationComponent } from './create-organization.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Routes } from '@angular/router';

const mockFirestore = {
  collection: () => {
    return {
      add: () => {
        console.log('called');
      },
    };
  },
};

const testRoutes: Routes = [
  {
    path: 'organization',
    component: CreateOrganizationComponent,
  },
];

describe('Create Organization Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule.withRoutes(testRoutes),
      ],
      providers: [
        {
          provide: AngularFirestore,
          useValue: mockFirestore,
        },
        {
          provide: AngularFireAuth,
          useValue: { user: of({ uid: 'test user id' }) },
        },
      ],
      declarations: [CreateOrganizationComponent],
    }).compileComponents();
  }));

  it('should create the page', () => {
    const fixture = TestBed.createComponent(CreateOrganizationComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should call into firestore on valid form submit', fakeAsync(() => {
    const fixture = TestBed.createComponent(CreateOrganizationComponent);
    const component = fixture.componentInstance;
    component.organizationForm.patchValue({ name: 'a name' });
    const spy1 = spyOn(mockFirestore, 'collection');
    const collection = { add: () => {} };
    spy1.and.returnValue(collection);
    const spy2 = spyOn(collection, 'add');

    component.submitForm();
    tick();
    spy2.calls.mostRecent().args.map((arg: any) => {
      expect(arg.name).toBe('a name');
    });
  }));
});
