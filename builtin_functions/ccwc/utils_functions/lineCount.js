export function countLine(text) {
  return (text.match(/\n/g) || []).length;
}