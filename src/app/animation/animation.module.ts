import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationComponent } from './animation.component';

@NgModule({
  declarations: [AnimationComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
  exports: [AnimationComponent],
})
export class AnimationModule {}
