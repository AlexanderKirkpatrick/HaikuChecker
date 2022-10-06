import { TestScheduler } from 'jest'
import { vowelCounter, diphthongCounter, silentVowelCounter } from '../src/haikuCheck.js'

describe ('vowelCounter', () => {
  test('should return the number of vowels in a string', () => {
    expect(vowelCounter("I want all the vowels")).toEqual(6);
  });
});

describe ('diphthongCounter', () => {
  test('should return the number of diphthongs in a string', () => {
    expect(diphthongCounter("Coy boy toy")).toEqual(3);
  });
});

describe ('silentVowelCounter', () => {
  test('should return the number of silent vowels in a string', () => {
    expect(silentVowelCounter("bread taste guitar business artistically age")).toEqual(5);
  });
});