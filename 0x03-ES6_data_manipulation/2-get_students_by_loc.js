export default function getStudentsByLocation(array, city) {
  return array.filter((x) => x.location === city);
}
