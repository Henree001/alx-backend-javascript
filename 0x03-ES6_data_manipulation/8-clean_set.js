export default function (set, str) {
  if (str === null || typeof str !== 'string') {
    return '';
  }
  let newString = [];
  for (const item of set) {
    if (item.startsWith(str) && (str.length !== 0)) {
      newString.push(item.slice(str.length));
    }
  }
  newString = newString.join('-');
  return newString;
}
