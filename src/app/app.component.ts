import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";;
import ScrollTrigger from 'gsap/ScrollTrigger'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'the-f2e-fourth-week1';
  loadingOpts: any;
  isDisplay = false;
  menu: any;
  menuClose: any;
  sideBar: any;
  mousemoveTimeline: any;
  scrollCover: any;
  scrollFace: any

  constructor() {
    this.menu = window.document.querySelector('.logo');
  }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    this.mousemoveTimeline = gsap.timeline({ repeat: -1 });
    this.scrollCover = gsap.timeline({
      scrollTrigger: {
        trigger: ".cover", // 決定scrolltrigger要以哪一個元素作為觸發基準點
        markers: false, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
        pin: true,
        scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
      },
    });
    this.scrollFace = gsap.timeline({
      scrollTrigger: {
        trigger: ".home", // 決定scrolltrigger要以哪一個元素作為觸發基準點
        markers: false, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
        pin: true,
        scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
      },
    });

    this.mousemoveTimeline.to(".mousemove", { y: 15, duration: 1 })
    this.mousemoveTimeline.to(".mousemove", { y: 0, duration: 1 });

    this.scrollCover.to(".cover-top", { yPercent: -30 })
    this.scrollCover.to(".pic-face", { yPercent: -70 })
    this.scrollCover.to(".cover-mouse", { autoAlpha: 0, ease: "expo" }, "<")
    this.scrollCover.to(".cover-right", { yPercent: 100 }, "<")
    this.scrollCover.to(".cover-left", { yPercent: 10 }, "<")
    this.scrollCover.to(".cover-top", { yPercent: -100 }, "<")
    this.scrollCover.to(".cover-left", { yPercent: 100 })
    this.scrollCover.to(".pic-face", { yPercent: -110 }, "<")
    this.scrollCover.to(".pic-task", { opacity: 1, ease: "expo" })
    this.scrollCover.to(".mouse", { opacity: 1, ease: "expo" }, "<");
  }
  prizeClick() {
    this.isDisplay = true;

  }

  liveVideoClick(personNo: number){
    switch (personNo) {
      case 1:
        window.open('https://www.youtube.com/watch?v=u_pK0v3ZkxA&t=3488s', '_blank');
        break;
      case 2:
        window.open('https://www.youtube.com/watch?v=-ViXWhy7FW0', '_blank');
        break;
      default:
        break;
    }
  }
}
