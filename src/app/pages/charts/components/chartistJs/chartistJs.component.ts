import { Component, ViewEncapsulation } from '@angular/core';


import { ChartistJsService } from './chartistJs.service';
import 'style-loader!./chartistJs.scss';

@Component({
  selector: 'chartist-js',
  templateUrl: './chartistJs.html',
})

export class ChartistJs {

  data: any;

  constructor(private _chartistJsService: ChartistJsService) {
  }

  updateChart1() {
    this._chartistJsService.updateChart(res => {
      this.data['areaLineData'] = res;
    });
  }

  ngOnInit() {
    this.data = this._chartistJsService.getAll();

    setInterval(_ => {
    this._chartistJsService.updateChart(res => {
      this.data['areaLineData'] = res;
    });
   }, 5000);
  }

  getResponsive(padding, offset) {
    return this._chartistJsService.getResponsive(padding, offset);
  }
}
