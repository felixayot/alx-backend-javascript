export default function getStudentIdsSum(array) {
  return array.reduce((sum, x) => sum + x.id, 0);
}
