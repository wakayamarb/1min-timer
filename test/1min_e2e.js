/**
 * Protractor e2e test cases
 */

import should from 'should'
should()

/**
 * Promise only setTimeout
 * @return {[Promise]}
 */
const wait = (duration) => {
  return () => new Promise((fulfilled) => {
    setTimeout(() => {fulfilled()}, duration)
  })
}

/**
 * Shortcuts which improve readability
 * @type {[Promise]}
 */
const clickStart = element(by.id('start')).click
const clickStop  = element(by.id('stop')).click
const clickReset = element(by.id('reset')).click
const getTimerText = element(by.id('display')).getText
const getTimerTextAgain = getTimerText

/**
 * Reset state before each test
 */
beforeEach(done => clickReset().then(done))

/**
 * A test scenario
 */
describe('Title', () => {
  it('should show `1MINUTE TIMER`', () => {

    element(by.className('title')).getText()
      .then(title => {
        title.should.equal('1 MINUTE TIMER')
      })
  })
})

/**
 * A test scenario
 */
describe('Start Button clicking', () => {
  it('should start timer', () => {
    let prevTimerText = ''

    return clickStart()
      .then(getTimerText).then(text => {prevTimerText = text})
      .then(wait(1200))
      .then(getTimerTextAgain).then(nextTimerText => {
        nextTimerText.should.not.equal(prevTimerText)
      })
  })
})

/**
 * A test scenario
 */
describe('Stop Button clicking', () => {
  it('should stop timer', () => {
    let prevTimerText = ''

    return clickStart()
      .then(clickStop)
      .then(getTimerText).then(text => {prevTimerText = text})
      .then(wait(1200))
      .then(getTimerTextAgain).then(nextTimerText => {
        nextTimerText.should.equal(prevTimerText)
      })
  })
})

/**
 * A test scenario
 */
describe('start button cliking after stop', () => {
  it('should restart timer', () => {
    let prevTimerText = ''

    return clickStart()
      .then(clickStop)
      .then(clickStart)
      .then(getTimerText).then(text => {prevTimerText = text})
      .then(wait(1200))
      .then(getTimerTextAgain).then(nextTimerText => {
        nextTimerText.should.not.equal(prevTimerText)
      })
  })
})

/**
 * A test scenario
 */
describe('Clicking reset button after start', () => {
  it('should restart timer', () => {
    let initialTimerText = ''

    return getTimerText().then(text => {initialTimerText = text})
      .then(clickStart)
      .then(wait(1200))
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
