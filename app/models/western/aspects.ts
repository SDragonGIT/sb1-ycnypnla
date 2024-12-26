export interface Aspect {
  planet1: string;
  planet2: string;
  aspectType: string;
  orb: number;
}

export class AspectCalculator {
  calculateAspects(planetaryPositions: any[]): Aspect[] {
    const aspects: Aspect[] = [];
    // Implement aspect calculations between planets
    return aspects;
  }

  private isValidAspect(angle: number, orb: number): boolean {
    const aspectAngles = [0, 60, 90, 120, 180];
    return aspectAngles.some(aspectAngle => 
      Math.abs(angle - aspectAngle) <= orb
    );
  }
}