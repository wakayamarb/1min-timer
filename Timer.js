/**
 * Timer class provide DOM content renderer and model of 1 second decrements.
 * @type {[Function]}
 */
const Timer = class Timer {
  /**
   * constructor
   * @type    {[Function]}
   * @param   {[Number]}     initial      Optional. Cooutdown inital value, default=60
   * @param   {[String]}     activeClass  Class attached when timer counting
   * @param   {[DOMElement]} display      Nullable. DOM Element which timer will be rendered
   * @param   {[Function]}   callback     Nullable. Callback function done when timer count finished
   * @return  {[Function]}
   */
  constructor({initial, activeClass, display, callback}) {
    // Class member initialization
    /**
     * Cooutdown inital value
     * @type {[Number]}
     */
    this.initial = initial ? Math.floor(initial) : 60

    /**
     * Class attached when timer counting
     * @type {String}
     */
    this.activeClass = activeClass ? activeClass : ''

    /**
     * DOM Element which timer will be rendered
     * @type {DOM Element}
     */
    this.display = display

    /**
     * Callback function done when timer count finished
     * @type {Function}
     */
    this.callback = callback

    /**
     * Inner statement whether counting down or not
     * @type {Boolean}
     */
    this.counting = false

    this.reset()
  }

  /**
   * Supportive function to provide a class to an element
   * @param {[DOMElement]} element DOM Element which is provided a class.
   * @param {[String]}     className Providing class name
   * @return {[void]}
   */
  _provideClass(element, className) {
    const classNames = (element.getAttribute('class'))
      .split(' ')
      .filter(e => (e != className) && (e != '')) // remove class if exists
    classNames.push(className) // push again
    element.setAttribute('class',classNames.join(' '))
  }

  /**
   * Supportive function to remove a class from an element
   * @param  {[type]} element    element DOM Element which is got rid of a class.
   * @param  {[type]} className removing class name
   * @return {[void]}
   */
  _removeClass(element, className) {
    const classNames = (element.getAttribute('class')).split(' ')
      .filter(e => (e != className) && (e != '')) //remove class if exists
    element.setAttribute('class',classNames.join(' '))
  }

  /**
   * start or restart timer
   * @return {[void]}
   */
  start() {
    // start can be use as reset when finished
    if (this.value <= 0) {
      this.reset()
    }

    // prevent duplicate call
    if (this.counting) {
      return
    }

    this._provideClass(this.display, this.activeClass)

    // timer manipulation
    this.timerId = setInterval(
      () => {
        this.value -= 1 // timer decrement
        this.render()
        // detect timer finish
        if (this.value <= 0) {
          this.stop()
          if (typeof this.callback == 'function') {
            // TODO: I want to observe render() finished before do callback,
            // in other word display.innerText changed.
            // but not yet.
            setTimeout(this.callback, 50)
          }
        }
      },
      1000 // 1sec.
    )

    // statement swich
    this.counting = true
  }

  /**
   * stop timer
   * @return {[void]}
   */
  stop() {
    this._removeClass(this.display, this.activeClass)

    // timer manipulation
    clearInterval(this.timerId)

    // statement swich
    this.counting = false
  }

  /**
   * reset timer data model
   * @return {[void]}
   */
  reset() {
    this.stop()
    this.timerId = false
    // reset display
    this.value = this.initial
    this.render()
  }

  /**
   * render timer value to view
   * @param  {[Number]} Optional. value remaining timer value
   * @return {[void]}
   */
  render(value) {

    var sec = value ? value : this.value

    // get hour value
    var hour = Math.floor(sec / 3600)
    sec -= 3600 * hour
    //get min value
    var min = Math.floor(sec / 60)
    sec -= Math.round(60 * min)

    // ZERO-fills
    hour = (hour < 10) ? ('0' + hour) : ('' + hour)
    min  = (min  < 10) ? ('0' + min ) : ('' + min )
    sec  = (sec  < 10) ? ('0' + sec ) : ('' + sec )
    this.display.innerText = [hour, min, sec].join(':')
  }
}

// CommonJS Export
if (module) {
  module.exports = Timer
}
