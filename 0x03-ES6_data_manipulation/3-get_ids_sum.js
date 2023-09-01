export default function getStudentIdsSum(studentlist) {
  const sumOfId = studentlist.reduce((sum, student) => sum + student.id);
  return sumOfId;
}
