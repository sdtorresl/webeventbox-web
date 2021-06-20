import { FeatureService } from './../../services/feature.service';
import { Feature } from './../../models/feature.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  featuresData?: Feature;

  constructor(private featureService: FeatureService) { }

  ngOnInit(): void {
    this.featureService.getFeatures().subscribe(resp => this.featuresData = resp);
  }

}
