import { TestScheduler } from 'jest'
import { vowelCounter, diphthongCounter, silentVowelCounter, syllableCounter, haikuChecker  } from '../src/haikuCheck.js'

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

describe ('syllableCounter', () => {
  test('should return the number of syllables in a string', () => {
    expect(syllableCounter("This is a great test")).toEqual(5);
  });
});

describe ('haikuChecker', () => {
  test('should return true or false if the poem is a haiku', () => {
    const line1 = "This is a great test";
    const line2 = "I cant make it work well though";
    const line3 = "Can you make poem"; 
    expect(haikuChecker(line1, line2, line3)).toEqual(true);
  })
})