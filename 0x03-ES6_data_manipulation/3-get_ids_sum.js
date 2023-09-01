export default function getStudentIdsSum(studentlist) {
  const sumOfId = studentlist.reduce((sum, student) => sum + student.id, 0);
  return sumOfId;
}
