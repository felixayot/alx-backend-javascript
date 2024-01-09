/* eslint-disable */
export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  return [...set]
    .filter((str) => (str !== undefined ? str.startsWith(startString) : ''))
    .map((str) => (str !== undefined ? str.slice(startString.length) : ''))
    .join('-');
}

/**
 * Another fix but still needs fixing
 * 
export default function cleanSet(set, startString) {
  let result = '';
  for (const element of set) {
    if (element.startsWith(startString)) {
      result += `${element.substring(startString.length)}-`;
    }
  }
  return result.slice(0, -1);
}
*/
