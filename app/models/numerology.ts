import { Observable } from '@nativescript/core';

export class Numerology extends Observable {
  constructor(private name: string, private birthDate: Date) {
    super();
  }

  calculateLifePathNumber(): number {
    const dateStr = this.birthDate.toISOString().split('T')[0].replace(/-/g, '');
    return this.reduceToSingleDigit(
      dateStr.split('').reduce((sum, digit) => sum + parseInt(digit), 0)
    );
  }

  private reduceToSingleDigit(num: number): number {
    if (num <= 9) return num;
    return this.reduceToSingleDigit(
      num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0)
    );
  }
}