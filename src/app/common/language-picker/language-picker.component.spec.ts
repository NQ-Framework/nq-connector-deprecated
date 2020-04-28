import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagePickerComponent } from './language-picker.component';

describe('LanguagePickerComponent', () => {
  let component: LanguagePickerComponent;
  let fixture: ComponentFixture<LanguagePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LanguagePickerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change language', () => {
    const reloadSpy = spyOn(component, 'reloadLocation').and.returnValue();
    const localStorageSpy = spyOn(localStorage, 'setItem').and.returnValue();
    component.changeLanguage('rs');
    expect(reloadSpy).toHaveBeenCalled();
    expect(localStorageSpy).toHaveBeenCalledWith('language_code', 'rs');
  });
});
