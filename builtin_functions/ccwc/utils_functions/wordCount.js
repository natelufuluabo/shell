export function countWords(text) {
  // Remove leading and trailing whitespaces and split the text into words
  const words = text.trim().split(/\s+/);

  // Filter out empty strings (caused by multiple whitespaces)
  const nonEmptyWords = words.filter(word => word !== '');

  // Return the count of non-empty words
  return nonEmptyWords.length;
}