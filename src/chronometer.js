class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      if (printTimeCallback) {
        printTimeCallback()
      }
    }, 1000); ; 
    
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    // ... your code goes here
   return Math.floor(this.currentTime%60)
}

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return value > 9 ? "" + value: "0" + value;
  }

  stop() {
    // ... your code goes here
    return clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    return this.currentTime = 0
  }

  split() {
    // ... your code goes here
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`
  }
}
