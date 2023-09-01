/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(studentlist, city, newgrades) {
  const studentGrade = studentlist.filter((student) => student.location === city).map((student) => {
    for (const item of newgrades) {
      if (student.id === item.studentId) {
        student.grade = item.grade;
      }
    }
    if (!student.grade) {
      student.grade = 'N/A';
    }
    return student;
  });
  return studentGrade;
}
