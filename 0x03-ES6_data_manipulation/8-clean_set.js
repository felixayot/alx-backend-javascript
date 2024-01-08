export default function cleanSet(set, startString) {
  let result = '';
  for (const element of set) {
    if (element.startsWith(startString)) {
      result += `${element.substring(startString.length)}-`;
    }
  }
  return result.slice(0, -1);
}
