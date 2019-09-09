import {Component, Input, OnInit} from '@angular/core';

import { Indicator } from '../indicator';

@Component({
  selector: 'app-tower',
  templateUrl: './tower.component.html',
  styleUrls: ['./tower.component.css']
})
export class TowerComponent implements OnInit {
  @Input()
  public indicator: Indicator;

  carnmass = Math.floor(Math.random() * 2000) + 100;
  public percent: number;
  public yRect: number;
  public heightRect: number;

  private maxHeight = 396; // tower's height is 400px minus 4px for gaps
  private yStart = 57; // tower's y is 55px plus 2px for gap

  constructor() { }

  ngOnInit() {
    this.towerPercent();
    this.levelIndicator();
  }

  private towerPercent(): void {
    if (this.indicator.value - this.indicator.minValue >= 0) {
      this.percent = Math.round((this.indicator.value - this.indicator.minValue) /
        (this.indicator.maxValue - this.indicator.minValue) * 100);
    } else {
      this.percent = 0;
    }
  }

  private levelIndicator(): void {
    if (this.percent >= 100) {
      this.yRect = this.yStart;
      this.heightRect = this.maxHeight;
    } else if (this.percent !== 0) {
      this.yRect = this.yStart + (this.maxHeight - this.maxHeight * this.percent / 100);
      this.heightRect = this.maxHeight * this.percent / 100;
    }
  }
}
