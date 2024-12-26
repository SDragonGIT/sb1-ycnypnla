import { Observable } from '@nativescript/core';
import { BirthChart, BirthDetails } from '../../models/birth-chart';

export class BirthChartViewModel extends Observable {
  private _birthDate: string = '';
  private _birthTime: string = '';
  private _latitude: string = '';
  private _longitude: string = '';
  private _chartDetails: string = '';
  private _hasResult: boolean = false;

  constructor() {
    super();
  }

  get birthDate(): string {
    return this._birthDate;
  }

  set birthDate(value: string) {
    if (this._birthDate !== value) {
      this._birthDate = value;
      this.notifyPropertyChange('birthDate', value);
    }
  }

  // Similar getters/setters for other properties...

  calculateChart() {
    const details: BirthDetails = {
      date: new Date(this._birthDate),
      time: this._birthTime,
      latitude: parseFloat(this._latitude),
      longitude: parseFloat(this._longitude),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };

    const chart = new BirthChart(details);
    const result = chart.calculateVedicChart();
    
    this._chartDetails = JSON.stringify(result, null, 2);
    this._hasResult = true;
    this.notifyPropertyChange('chartDetails', this._chartDetails);
    this.notifyPropertyChange('hasResult', this._hasResult);
  }
}