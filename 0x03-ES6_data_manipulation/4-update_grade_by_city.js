export default function updateStudentGradeByCity(array, city, newGrades) {
  return array
    .filter((x) => x.location === city)
    .map((x) => {
      const grade = newGrades.find((studentGrade) => studentGrade.studentId === x.id);
      return {
        ...x,
        grade: grade ? grade.grade : 'N/A',
      };
    });
}
