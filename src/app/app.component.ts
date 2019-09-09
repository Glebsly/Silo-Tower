import {Component, OnInit} from '@angular/core';

import { Indicator } from './indicator';
import { IndicatorService } from './indicator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public indicators: Indicator[];

  constructor(private indicatorService: IndicatorService) { }

  ngOnInit() {
    this.getIndicators();
  }

  private getIndicators(): void {
    this.indicatorService.getIndicators()
      .subscribe(indicators => this.indicators = indicators);
  }
}
