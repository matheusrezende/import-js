'use strict';

class Range {
  /**
   * @param {Number} start
   * @param {Number} end
   */
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  /**
   * @param {Numbe} number
   * @return {Boolean}
   */
  includes(number) {
    return this.start <= number && this.end >= number;
  }

  /**
   * @return {Number}
   */
  size() {
    if (this.end === this.start) {
      return 0;
    }
    return this.end - this.start + 1;
  }

  /**
   * This isn't an exact match for Array.prototype.forEach, but that is probably
   * okay for our needs.
   * @param {Function} callback
   * @return {undefined}
   */
  forEach(callback) {
    if (this.start === this.end) {
      return undefined;
    }

    for (let i = this.start; i <= this.end; i++) {
      callback(i);
    }

    return undefined;
  }
}

module.exports = Range;