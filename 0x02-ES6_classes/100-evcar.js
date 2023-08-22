import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  get range() {
    return this._range;/* eslint-disable-line no-underscore-dangle */
  }

  set range(value) {
    this._range = value;/* eslint-disable-line no-underscore-dangle */
  }

  cloneCar() {
    const Species = super.constructor;

    return new Species();
  }
}
