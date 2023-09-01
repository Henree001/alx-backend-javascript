export default function getListStudentIds(list) {
  if (!(list instanceof Array)) {
    return [];
  }

  const ids = list.map((value) => value.id);
  return ids;
}
