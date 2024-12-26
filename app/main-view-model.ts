import { Observable, Frame } from '@nativescript/core';

export class MainViewModel extends Observable {
  constructor() {
    super();
  }

  navigateToBirthChart() {
    Frame.topmost().navigate({
      moduleName: "views/birth-chart/birth-chart-page"
    });
  }

  navigateToNumerology() {
    Frame.topmost().navigate({
      moduleName: "views/numerology/numerology-page"
    });
  }

  navigateToPrashna() {
    Frame.topmost().navigate({
      moduleName: "views/prashna/prashna-page"
    });
  }
}