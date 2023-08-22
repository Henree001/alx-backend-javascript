export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;/* eslint-disable-line no-underscore-dangle */
  }

  set size(value) {
    this._size = value;/* eslint-disable-line no-underscore-dangle */
  }

  get location() {
    return this._location;/* eslint-disable-line no-underscore-dangle */
  }

  set location(value) {
    this._location = value;/* eslint-disable-line no-underscore-dangle */
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;/* eslint-disable-line no-underscore-dangle */
    }
    if (hint === 'string') {
      return this.location;/* eslint-disable-line no-underscore-dangle */
    }
    return this;
  }
}
