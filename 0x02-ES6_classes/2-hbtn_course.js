export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!(students instanceof Array)) {
      throw new TypeError('Students must be an array');
    }
    if (students.every((item) => typeof item !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._name = name; // eslint-disable-line no-underscore-dangle
    this._length = length; // eslint-disable-line no-underscore-dangle
    this._students = students; // eslint-disable-line no-underscore-dangle
  }

  get name() {
    return this._name; // eslint-disable-line no-underscore-dangle
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._name = value; // eslint-disable-line no-underscore-dangle
  }

  get length() {
    return this._length; // eslint-disable-line no-underscore-dangle
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }

    this._length = value; // eslint-disable-line no-underscore-dangle
  }

  get students() {
    return this._students; // eslint-disable-line no-underscore-dangle
  }

  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array');
    }
    if (value.every((item) => typeof item !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    this._students = value; // eslint-disable-line no-underscore-dangle
  }
}
