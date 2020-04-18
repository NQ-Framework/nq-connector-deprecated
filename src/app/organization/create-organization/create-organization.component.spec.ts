import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateOrganizationComponent } from './create-organization.component';

describe('Create Organization Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [CreateOrganizationComponent],
    }).compileComponents();
  }));

  it('should create the page', () => {
    const fixture = TestBed.createComponent(CreateOrganizationComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
