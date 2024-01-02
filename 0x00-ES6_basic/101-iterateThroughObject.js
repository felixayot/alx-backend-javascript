/* eslint-disable */
export default function iterateThroughObject(reportWithIterator) {
  let employees = '';
  for (const [key, value] of Object.entries(reportWithIterator)) {
    employees += `${value}`;
    if (parseInt(key) !== reportWithIterator - 1) {
      employees += ' | ';
    }
    var extract = employees.slice(0, -2);
  }
  return extract;
}
