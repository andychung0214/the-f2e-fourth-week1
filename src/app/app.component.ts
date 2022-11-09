import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the-f2e-fourth-week1';
  loadingOpts: any;
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

  ngOnInit(): void {}



}
