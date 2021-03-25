'use strict';

class Counter {
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }

  increase() {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      this.callback && this.callback(this.counter);
    }
  }
}

function printNumber(num) {
  console.log(`Wow! ${num}`);
}

const counter = new Counter(printNumber);
counter.increase();
counter.increase();
counter.increase();
counter.increase();
counter.increase();
counter.increase();
counter.increase();