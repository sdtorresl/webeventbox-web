import { Component, OnInit } from '@angular/core';

export const featuresBanner = [
  {
    id: 1,
    title: 'El Botón de Transmisión de WeBox le ofrece la mejor experiencia virtual a todos sus invitados.',
    description: 'Diseñada para que los contenidos tomen una verdadera relevancia y con la posibilidad de ser personalizados para su marca y sus aliados.',
    imgURL: 'https://dummyimage.com/600x300/cccccc/000000',
  },
  {
    id: 2,
    title: 'El Botón de Transmisión de WeBox le ofrece la mejor experiencia virtual a todos sus invitados.',
    description: 'Diseñada para que los contenidos tomen una verdadera relevancia y con la posibilidad de ser personalizados para su marca y sus aliados.',
    imgURL: 'https://dummyimage.com/600x300/cccccc/000000',
  },
  {
    id: 3,
    title: 'El Botón de Transmisión de WeBox le ofrece la mejor experiencia virtual a todos sus invitados.',
    description: 'Diseñada para que los contenidos tomen una verdadera relevancia y con la posibilidad de ser personalizados para su marca y sus aliados.',
    imgURL: 'https://dummyimage.com/600x300/cccccc/000000',
  }
];

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  featuresBanner =featuresBanner;

  constructor() { }

  ngOnInit(): void {
  }

}
