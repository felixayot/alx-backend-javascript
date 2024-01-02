/* eslint-disable */
export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    array[value] = appendString + value;
  }

  return array;
}
