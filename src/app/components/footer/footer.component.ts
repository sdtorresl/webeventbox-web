import { Terms, Policy } from './../../models/terms.model';
import { TermsAndConditionsService } from './../../services/terms-and-conditions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  termsData?: Terms;
  policyData?: Policy;
  date: Number = new Date().getFullYear();

  constructor(private termsService: TermsAndConditionsService) { }

  ngOnInit(): void {
    this.termsService.getTerms().subscribe(resp => this.termsData = resp);
    this.termsService.getPolicy().subscribe(resp => this.policyData = resp);
  }

}
