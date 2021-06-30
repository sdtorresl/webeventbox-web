import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent implements OnInit, AfterViewInit {

  @ViewChild('widgetsContent') widgetsContent!: ElementRef;
  leftActive: boolean = true;
  rightActive: boolean = true;

  constructor() { }

  ngAfterViewInit(): void {
    this.checkActiveArrows();
  }

  ngOnInit(): void {
  }

  scrollLeft() {
    const widgetContent = this.widgetsContent.nativeElement;
    widgetContent.scrollLeft -= 150;
    this.checkActiveArrows();
  }

  scrollRight() {
    const widgetContent = this.widgetsContent.nativeElement;
    widgetContent.scrollLeft += 150;
    this.checkActiveArrows();
  }

  private checkActiveArrows() {
    const widgetContent = this.widgetsContent.nativeElement;
    const maxScroll = widgetContent.scrollWidth - widgetContent.clientWidth;
    const minScroll = 0;

    this.leftActive = !(widgetContent.scrollLeft <= minScroll);
    this.rightActive = !(widgetContent.scrollLeft >= maxScroll);
  }
}
