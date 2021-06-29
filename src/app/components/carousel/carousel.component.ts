import { Convert, Carousel } from './../../models/carousel.model';
import { CarouselService } from '../../services/carousel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  carouselData: Carousel = {
    id: 0,
    created_at: new Date(),
    updated_at: new Date(),
    slider_content: []
  }


  constructor(private carousel: CarouselService) { }

  ngOnInit(): void {
    this.carousel.getSliders()
      .subscribe( (resp) => {
        this.carouselData = Convert.toCarousel(JSON.stringify(resp));
      }
     );
  }

}
