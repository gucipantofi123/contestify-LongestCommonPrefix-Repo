const { longestCommonPrefix } = require('./LongestCommonPrefix');

describe('longestCommonPrefix', () => {
  test('should return empty string for empty array', () => {
    expect(longestCommonPrefix([])).toBe('');
  });

  test('should return the string itself for single string in array', () => {
    expect(longestCommonPrefix(['hello'])).toBe('hello');
  });

  test('should find common prefix for strings with common prefix', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
  });

  test('should return empty string when no common prefix exists', () => {
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
  });

  test('should handle strings of different lengths', () => {
    expect(longestCommonPrefix(['interspecies', 'interstellar', 'interstate'])).toBe('inters');
  });

  test('should handle all identical strings', () => {
    expect(longestCommonPrefix(['test', 'test', 'test'])).toBe('test');
  });
});
