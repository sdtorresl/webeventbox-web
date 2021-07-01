import { AdvantageService } from './../../services/advantage.service';
import { Advantage } from './../../models/advantge.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent implements OnInit {

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinity: false,
    //autoplay: true,
    adaptiveHeight: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
        }
      }
    ]
  };

  advantagesData?: Advantage;

  constructor(private advantageService: AdvantageService) { }

  ngOnInit(): void {
    this.advantageService.getAdvantages().subscribe(resp => {
      console.log(resp);
      this.advantagesData = resp;
    })
  }

}
