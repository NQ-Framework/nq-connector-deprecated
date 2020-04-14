import { NgModule } from '@angular/core';
import { LanguagePickerComponent } from './language-picker/language-picker.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule],
  declarations: [LanguagePickerComponent],
  exports: [LanguagePickerComponent],
})
export class CommonModule {}
