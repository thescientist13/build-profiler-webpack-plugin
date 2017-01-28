'use strict';

class MyOffsetClass {

  constructor() {
    this.offset = 4;
  }

  calcOffset(offset) {
    return isNaN(offset) ? this.offset : offset;
  }
}

module.exports = MyOffsetClass;