export const vowelCounter = (string) => {
  return (/[aeiouy]/gi).test(string) ? string.match(/[aeiouy]/gi).length : 0;
};

export const diphthongCounter = (string) => {
  return (/[aeiouy][aeiouy]/gi).test(string) ? string.match(/[aeiouy][aeiouy]/gi).length : 0;
};

export const silentVowelCounter = (string) => {
  const silentA = (/ally\b/gi).test(string) ? string.match(/ally\b/gi).length : 0;
  const silentE = (/e\b/gi).test(string) ? string.match(/e\b/gi).length : 0;
  const silentED = (/ed\b/gi).test(string) ? string.match(/ed\b/gi).length : 0;
  const silentU = (/gu[aeiouy]/gi).test(string) ? string.match(/gu[aeiouy]/gi).length : 0;
  const silentI = (/business/gi).test(string) ? string.match(/business/gi).length : 0;
  return silentA + silentE + silentED + silentU + silentI;
};

export const syllableCounter = (string) => {
  return vowelCounter(string) - diphthongCounter(string) - silentVowelCounter(string);
};

export const haikuChecker = (line1, line2, line3) => {
  const line1Checker = syllableCounter(line1);
  const line2Checker = syllableCounter(line2);
  const line3Checker = syllableCounter(line3);
  return line1Checker === 5 && line2Checker === 7 && line3Checker === 5;
};