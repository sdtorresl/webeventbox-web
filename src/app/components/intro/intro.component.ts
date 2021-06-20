import { Intro } from './../../models/intro.model';
import { IntroService } from './../../services/intro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  introData?: Intro = undefined;

  constructor(private introService: IntroService) { }

  ngOnInit(): void {
    this.introService.getIntro().subscribe(resp => this.introData = resp);
  }

}
