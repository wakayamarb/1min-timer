Timer = class Timer {

  constructor(initial, displayId, callback) {
    this.initial = initial ? Math.floor(initial) : 60
    this.display = document.getElementById(displayId)
    this.callback = callback
    this.counting = false
    this.reset()
  }

  start() {
    // start can be use as reset when finished
    if (this.value <= 0) {
      this.reset()
    }

    // prevent duplicate call
    if (this.counting) {
      return
    }

    // set class 'started'
    const classes = (this.display.getAttribute('class')).split(' ')
      .filter(e => e != 'started')
    classes.push('started')
    this.display.setAttribute('class',classes.join(' '))

    this.timerId = setInterval(
      () => {
        this.value -= 1
        this.render()
        if (this.value <= 0) {
          this.stop()
          if (typeof this.callback == 'function') {
            // I want to observe render() finished in other word display.innerText changed before do callback, but not yet
            setTimeout(this.callback, 50)
          }
        }
      },
      1000
    )
    this.counting = true
  }

  stop() {
    // remove class 'started'
    const classes = (this.display.getAttribute('class')).split(' ')
      .filter(e => e != 'started')
    this.display.setAttribute('class',classes.join(' '))
    clearInterval(this.timerId)
    this.counting = false
  }

  reset() {
    this.stop()
    this.timerId = false
    this.value = this.initial
    this.render()
  }

  render(value) {
    var sec = value ? value : this.value

    // get hour value
    var hour = Math.floor(sec / 3600)
    sec -= 3600 * hour
    //get min value
    var min = Math.floor(sec / 60)
    sec -= Math.round(60 * min)

    // ZERO-fills
    hour = hour < 10 ? "0" + hour : "" + hour
    min  = min  < 10 ? "0" + min  : "" + min
    sec  = sec  < 10 ? "0" + sec  : "" + sec
    this.display.innerText = [hour, min, sec].join(":")
  }
}
