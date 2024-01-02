export default function iterateThroughObject(reportWithIterator) {
    let employees = "";
    for (const [key, value] of Object.entries(reportWithIterator)) {
        employees += `${value}`;
        if (parseInt(key) !== reportWithIterator - 1) {
            employees += " | ";
        }
    }
    return employees;
}
