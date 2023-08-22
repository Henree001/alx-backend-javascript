import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;/* eslint-disable-line no-underscore-dangle */
    this._currency = currency;/* eslint-disable-line no-underscore-dangle */
  }

  get amount() {
    return this._amount;/* eslint-disable-line no-underscore-dangle */
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = value;/* eslint-disable-line no-underscore-dangle */
  }

  /**
   * @returns {Currency}
   */
  get currency() {
    return this._currency;/* eslint-disable-line no-underscore-dangle */
  }

  /**
   * @param {Currency} value
   */
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = value;/* eslint-disable-line no-underscore-dangle */
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
