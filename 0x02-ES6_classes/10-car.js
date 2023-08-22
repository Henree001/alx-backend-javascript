export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;/* eslint-disable-line no-underscore-dangle */
  }

  set brand(value) {
    this._brand = value;/* eslint-disable-line no-underscore-dangle */
  }

  get motor() {
    return this._motor;/* eslint-disable-line no-underscore-dangle */
  }

  set motor(value) {
    this._motor = value;/* eslint-disable-line no-underscore-dangle */
  }

  get color() {
    return this._color;/* eslint-disable-line no-underscore-dangle */
  }

  set color(value) {
    this._color = value;/* eslint-disable-line no-underscore-dangle */
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
