import { TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateOrganizationComponent } from './create-organization.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

describe('Create Organization Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      providers: [
        { provide: AngularFirestore, useValue: {} },
        { provide: AngularFireAuth, useValue: {} },
      ],
      declarations: [CreateOrganizationComponent],
    }).compileComponents();
  }));

  it('should create the page', () => {
    const fixture = TestBed.createComponent(CreateOrganizationComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
