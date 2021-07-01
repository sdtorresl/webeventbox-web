import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from "ng-recaptcha";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdbModule } from 'mdb-angular-ui-kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeaturesComponent } from './components/features/features.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { MainmenuComponent } from './components/mainmenu/mainmenu.component';
import { ContactComponent } from './components/contact/contact.component';
import { IntroComponent } from './components/intro/intro.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { JourneyComponent } from './components/journey/journey.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    FooterComponent,
    AdvantagesComponent,
    MainmenuComponent,
    ContactComponent,
    IntroComponent,
    CarouselComponent,
    JourneyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [{ provide: RECAPTCHA_V3_SITE_KEY, useValue: "<YOUR_SITE_KEY>" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
