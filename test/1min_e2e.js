/**
 * Protractor e2e test cases
 */

import should from 'should'
should()

/**
 * Promise only setTimeout
 * @return {[Promise]}
 */
const getPromisedTimeout = (duration) => {
  return () => new Promise((fulfilled) => {
    setTimeout(() => {fulfilled()}, duration)
  })
}

/**
 * @type {[Promise]}
 */
const getTimerText = element(by.id('display-timer')).getText

/**
 * alias of right variant which improve readability.
 * @type {[Promise]}
 */
const getTimerTextAgain = getTimerText

/**
 * Shortcuts
 * @type {[Promise]}
 */
const clickStart = element(by.id('button-start')).click
const clickStop  = element(by.id('button-stop')).click
const clickReset = element(by.id('button-reset')).click


/**
 * Reset state before each test
 */
beforeEach(done => {clickReset().then(done)})

/**
 * A test suit
 */
describe('Title ', () => {
  it('should show `1MINUTE TIMER`', () => {

    element(by.className('title')).getText()
      .then(title => {
        title.should.equal('1 MINUTE TIMER')
      })
  })
})

/**
 * A test suit
 */
describe('When Start Button clicked', () => {
  it('should start timer', () => {
    let prevTimerText = ''

    return clickStart()
      .then(getTimerText).then(text => {prevTimerText = text})
      .then(getPromisedTimeout(1200))
      .then(getTimerTextAgain).then(nextTimerText => {
        nextTimerText.should.not.equal(prevTimerText)
      })
  })
})

/**
 * A test suit
 */
describe('When Stop Button clicked', () => {
  it('should stop timer', () => {
    let prevTimerText = ''

    return clickStart()
      .then(clickStop)
      .then(getTimerText).then(text => {prevTimerText = text})
      .then(getPromisedTimeout(1200))
      .then(getTimerTextAgain).then(nextTimerText => {
        nextTimerText.should.equal(prevTimerText)
      })
  })
})

/**
 * A test suit
 */
describe('Clicking start after stop', () => {
  it('should restart timer', () => {
    let prevTimerText = ''

    return clickStart()
      .then(clickStop)
      .then(clickStart)
      .then(getTimerText).then(text => {prevTimerText = text})
      .then(getPromisedTimeout(1200))
      .then(getTimerTextAgain).then(nextTimerText => {
        nextTimerText.should.not.equal(prevTimerText)
      })
  })
})

/**
 * A test suit
 */
describe('Clicking reset after start', () => {
  it('should restart timer', () => {
    let initialTimerText = ''

    return getTimerText().then( text => {initialTimerText = text})
      .then(clickStart)
      .then(getPromisedTimeout(1200))
      .then(clickReset)
      .then(getTimerTextAgain).then(nextTimerText => {
        nextTimerText.should.equal(initialTimerText)
      })
  })
})

/**
 * Close the renderer
 */
after(() => {
  browser.driver.close()
})
