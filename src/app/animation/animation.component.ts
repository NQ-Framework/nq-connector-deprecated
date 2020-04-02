import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-animation-component',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
})
export class AnimationComponent implements OnInit {
  @Input()
  animationSource: string;

  animationLoaded = false;

  constructor() {
    console.log(this.animationSource);
  }

  lottieReady() {
    this.animationLoaded = true;
  }

  ngOnInit(): void {}
}
