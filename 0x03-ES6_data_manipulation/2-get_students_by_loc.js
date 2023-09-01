export default function getStudentsByLocation(studentlist, city) {
  const location = studentlist.filter((student) => student.location === city);
  return location;
}
