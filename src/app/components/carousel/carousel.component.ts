import { CarouselService } from '../../services/carousel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor(private carousel: CarouselService) { }

  ngOnInit(): void {
    this.carousel.getSliders()
      .subscribe( resp=> {
        console.log(resp);
      });
  }

}
