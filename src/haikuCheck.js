export const vowelCounter = (string) => {
  return (/[aeiouy]/gi).test(string) ? string.match(/[aeiouy]/gi).length : 0;
};

export const diphthongCounter = (string) => {
  return (/[aeiouy][aeiouy]/gi).test(string) ? string.match(/[aeiouy][aeiouy]/gi).length : 0;
};

