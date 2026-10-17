export type NumerologyResult = { birth: number; life: number };

function reduceNumber(value: number): number {
  let current = value;
  while (current > 9 && current !== 11 && current !== 22) {
    current = String(current).split('').reduce((sum, digit) => sum + Number(digit), 0);
  }
  return current;
}

export function calculateBirthNumbers(isoDate: string): NumerologyResult | null {
  const date = new Date(`${isoDate}T00:00:00`);
  if (!isoDate || Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== isoDate || date > new Date()) return null;
  const dateDigitSum = isoDate.replaceAll('-', '').split('').reduce((sum, digit) => sum + Number(digit), 0);
  return { birth: reduceNumber(date.getDate()), life: reduceNumber(dateDigitSum) };
}

const reflections: Record<number, string> = {
  1: 'An introductory reflection on initiative and self-direction.',
  2: 'An introductory reflection on patience, connection and cooperation.',
  3: 'An introductory reflection on expression, learning and creativity.',
  4: 'An introductory reflection on structure, effort and steady foundations.',
  5: 'An introductory reflection on flexibility, curiosity and change.',
  6: 'An introductory reflection on care, responsibility and harmony.',
  7: 'An introductory reflection on inquiry, observation and inner study.',
  8: 'An introductory reflection on organisation, ambition and accountability.',
  9: 'An introductory reflection on compassion, perspective and completion.',
  11: 'A master-number tradition associates this with intuition and inspiration.',
  22: 'A master-number tradition associates this with vision and considered building.',
};

export function numberReflection(number: number): string {
  return reflections[number] ?? 'A traditional numerology interpretation for personal reflection.';
}
