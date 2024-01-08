export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  /* const newArray = array.map((x) => x.id);
  return newArray; */
  return array.map((x) => x.id);
}
