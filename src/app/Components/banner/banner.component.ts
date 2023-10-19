import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  slides = [
    {
      imageUrl: 'https://picsum.photos/id/2/1536/800',
      caption: 'Slide 1',
    },
    {
      imageUrl: 'https://picsum.photos/id/3/1536/800',
      caption: 'Slide 2',
    },
    {
      imageUrl: 'https://picsum.photos/id/1/1536/800',
      caption: 'Slide 3',
    },
  ];

  currentIndex = 0;

  constructor() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 3000); // Thay đổi thời gian chuyển đổi slide tùy ý (đơn vị: milliseconds)
  }
}
