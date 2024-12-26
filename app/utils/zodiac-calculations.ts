export const zodiacSigns = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

export const calculateZodiacDegrees = (longitude: number): number => {
  return longitude % 30;
};

export const getZodiacSign = (longitude: number): string => {
  const signIndex = Math.floor(longitude / 30);
  return zodiacSigns[signIndex];
};