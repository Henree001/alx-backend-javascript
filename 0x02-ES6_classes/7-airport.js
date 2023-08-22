export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;/* eslint-disable-line no-underscore-dangle */
  }

  set name(value) {
    this._name = value;/* eslint-disable-line no-underscore-dangle */
  }

  get code() {
    return this._code;/* eslint-disable-line no-underscore-dangle */
  }

  set code(value) {
    this._code = value;/* eslint-disable-line no-underscore-dangle */
  }

  get [Symbol.toStringTag]() {
    return this._code;/* eslint-disable-line no-underscore-dangle */
  }
}
