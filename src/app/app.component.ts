import { Component, OnInit } from '@angular/core';
import 'gsap';
import {TimelineMax} from 'gsap/gsap-core';
import Draggable from 'gsap/Draggable';
import ScrollTrigger from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'the-f2e-fourth-week1';
  loadingOpts: any;
  // scrollBox =  new TimelineMax({paused: true, reversed: true,
  //   scrollTrigger: {
  //     trigger: '.box',
  //     pin: true,
  //     start: 'top top',
  //     end: 'bottom bottom',
  //     markers: true,
  //     toggleActions: 'play none none reverse',
  //   }
  //   });
  constructor() {

// this.loadingOpts: AnimationOptions = {
//   path: '/assets/json/loading.json',
//   autoplay: true,
//   loop: true,
//   initialSegment: [10, 88]
// };
// options: AnimationOptions = {
//   path: '/assets/json/loading.json',
// };
// animationCreated(animationItem: AnimationItem): void {
//   console.log(animationItem);
// }
  }

  ngOnInit(): void {
    // this.scrollTgr();
    // gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);
  }

  // scrollTgr() {
  //   this.scrollBox.to('.box', { y: 30, opacity: 0 });
  //   this.scrollBox.to('.box', { y: 0, opacity: 1 });
  //   this.scrollBox.play();
  // }

}
