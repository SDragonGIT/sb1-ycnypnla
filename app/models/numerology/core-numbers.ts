export class CoreNumberCalculator {
  calculateLifePathNumber(birthDate: Date): number {
    const dateStr = birthDate.toISOString().split('T')[0].replace(/-/g, '');
    return this.reduceToSingleDigit(
      dateStr.split('').reduce((sum, digit) => sum + parseInt(digit), 0)
    );
  }

  calculateDestinyNumber(fullName: string): number {
    const numerologyValue = this.convertNameToNumbers(fullName);
    return this.reduceToSingleDigit(numerologyValue);
  }

  calculateSoulUrgeNumber(fullName: string): number {
    const vowels = this.extractVowels(fullName);
    return this.reduceToSingleDigit(
      this.convertNameToNumbers(vowels)
    );
  }

  private convertNameToNumbers(name: string): number {
    const numerologyMap: { [key: string]: number } = {
      'a': 1, 'j': 1, 's': 1,
      'b': 2, 'k': 2, 't': 2,
      'c': 3, 'l': 3, 'u': 3,
      'd': 4, 'm': 4, 'v': 4,
      'e': 5, 'n': 5, 'w': 5,
      'f': 6, 'o': 6, 'x': 6,
      'g': 7, 'p': 7, 'y': 7,
      'h': 8, 'q': 8, 'z': 8,
      'i': 9, 'r': 9
    };

    return name.toLowerCase()
      .split('')
      .filter(char => char.match(/[a-z]/))
      .reduce((sum, char) => sum + (numerologyMap[char] || 0), 0);
  }

  private extractVowels(name: string): string {
    return name.toLowerCase().split('')
      .filter(char => 'aeiou'.includes(char))
      .join('');
  }

  private reduceToSingleDigit(num: number): number {
    if (num <= 9) return num;
    return this.reduceToSingleDigit(
      num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0)
    );
  }
}