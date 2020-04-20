import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationComponent } from './organization.component';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AngularFireAuth } from '@angular/fire/auth';

describe('OrganizationComponent', () => {
  let component: OrganizationComponent;
  let fixture: ComponentFixture<OrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // imports: [RouterTestingModule],
      // providers: [{ provide: AngularFireAuth, useValue: {} }],
      declarations: [OrganizationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
