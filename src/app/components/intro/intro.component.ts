import { Component, OnInit } from '@angular/core';

export const introItems = [
  {
    id: 1,
    title: 'Video Conferencias',
    imgURL: 'https://dummyimage.com/400x300/cccccc/000000',
  },
  {
    id: 2,
    title: 'Webinars',
    imgURL: 'https://dummyimage.com/400x300/cccccc/000000',
  },
  {
    id: 3,
    title: 'Eventos On line',
    imgURL: 'https://dummyimage.com/400x300/cccccc/000000',
  },
  {
    id: 4,
    title: 'Eventos Híbridos',
    imgURL: 'https://dummyimage.com/400x300/cccccc/000000',
  },
  {
    id: 2,
    title: 'Webinars',
    imgURL: 'https://dummyimage.com/400x300/cccccc/000000',
  },
  {
    id: 3,
    title: 'Eventos On line',
    imgURL: 'https://dummyimage.com/400x300/cccccc/000000',
  },
  {
    id: 4,
    title: 'Eventos Híbridos',
    imgURL: 'https://dummyimage.com/400x300/cccccc/000000',
  }
];

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  introItems = introItems;

  constructor() { }

  ngOnInit(): void {
  }

}
