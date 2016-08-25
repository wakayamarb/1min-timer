/**
 * Protractor e2e test cases
 */

import should from 'should'
should()

/**
 * Promise object only do setTimeout
 * @param {[Object]} value object passed
 * @return {[Promise]}
 */
const promiseTimeout = () => new Promise((fulfilled) => {
  setTimeout(() => { fulfilled() }, 1200)
})

/**
 * [getTimerText description]
 * @type {[Promise]}
 */
const getTimerText = element(by.id('display-timer')).getText

/**
 * alias of right variant which improve readability.
 * @type {[Promise]}
 */
const getTimerTextAgain = getTimerText

const clickStart = element(by.id('button-start')).click
const clickStop  = element(by.id('button-stop')).click
const clickReset = element(by.id('button-reset')).click


/**
 * Reset state before each test
 */
beforeEach(done => { clickReset().then(done)})

/**
 * A test suit
 */
describe('Title ', () => {
  it('should show `1MINUTE TIMER`', () => {

    element(by.className('title')).getText()
      .then((title) => {
        title.should.equal('1 MINUTE TIMER')
      })
  })
})

/**
 * A test suit
 */
describe('Start Button', () => {
  it('should start timer', () => {
    let prevTimerText = ''

    return clickStart()
      .then(getTimerText).then((text) => {prevTimerText = text})
      .then(promiseTimeout)
      .then(getTimerTextAgain).then((nextTimerText) => {
        nextTimerText.should.not.equal(prevTimerText)
      })
  })
})

/**
 * A test suit
 */
describe('Stop Button', () => {
  it('should stop timer', () => {
    let prevTimerText = ''

    return clickStart()
      .then(clickStop)
      .then(getTimerText).then((text) => {prevTimerText = text})
      .then(promiseTimeout)
      .then(getTimerTextAgain).then((nextTimerText) => {
        nextTimerText.should.equal(prevTimerText)
      })
  })
})

/**
 * A test suit
 */
describe('Stop and start Button', () => {
  it('should restart timer', done => {
    let prevTimerText = ''

    clickStart()
      .then(clickStop)
      .then(clickStart)
      .then(getTimerText).then((text) => {prevTimerText = text})
      .then(promiseTimeout)
      .then(getTimerTextAgain).then((nextTimerText) => {
        nextTimerText.should.not.equal(prevTimerText)
        done()
      })
  })
})

/**
 * A test suit
 */
describe('start and reset Button', () => {
  it('should restart timer', done => {
    let initialTimerText = ''

    getTimerText().then((text) => {initialTimerText = text})
      .then(clickStart)
      .then(promiseTimeout)
      .then(clickReset)
      .then(getTimerTextAgain).then((nextTimerText) => {
        nextTimerText.should.equal(initialTimerText)
        done()
      })
  })
})

after(() => {
  browser.driver.close()
})
