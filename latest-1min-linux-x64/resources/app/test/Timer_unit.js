/**
 * Mocha Unit test cases
 */

import Timer  from '../www/Timer'
import should from 'should'
should()

// DOM stub
const mockAttributes = { class:'' }
const mockDisplay = {
  getAttribute: (attr) => { return mockAttributes[attr] ? mockAttributes[attr] : '' },
  setAttribute: (attr, value) => { mockAttributes[attr] = value },
}

// some consts
const INITIAL = 10 // should be below 60 to simplify test
const ACTIVE_CLASS = 'started'

/**
 * testing model
 * @type {Timer}
 */
const timer = new Timer({
  initial: INITIAL,
  activeClass: ACTIVE_CLASS,
  display: mockDisplay
})

/**
 * Initialize DOM stub
 */
beforeEach(() => {
  mockAttributes.class = ''
  mockDisplay.innerText = ''
})

describe('Test of start', () => {
  it('should start countdown', (done) => {
    timer.start()
    setTimeout(() => {
      timer.value.should.be.below(INITIAL)
      mockAttributes.class.should.equal(ACTIVE_CLASS)
      mockDisplay.innerText.should.not.equal('00:00:' + INITIAL)
      done()
    }, 1200)
  })
})

describe('Test of stop', () => {
  it('should stop countdown after started', (done) => {
    timer.start()
    setTimeout(() => {
      timer.stop()
      const valueAtStopped = timer.value
      const displayedAtStopped = mockDisplay.innerText
      setTimeout(() => {
        timer.value.should.equal(valueAtStopped)
        mockAttributes.class.should.not.equal(ACTIVE_CLASS)
        mockDisplay.innerText.should.equal(displayedAtStopped)
        done()
      }, 1200)
    }, 1200)
  }).timeout(3000)
})

describe('Test of restart', () => {
  it('should restart countdown after stopped', (done) => {
    timer.start()
    setTimeout(() => {
      timer.stop()
      const valueAtStopped = timer.value
      const displayedAtStopped = mockDisplay.innerText
      setTimeout(() => {
        timer.start()
        setTimeout(() => {
          timer.value.should.be.below(valueAtStopped)
          mockAttributes.class.should.equal(ACTIVE_CLASS)
          mockDisplay.innerText.should.not.equal(displayedAtStopped)
          done()
        }, 1200)
      }, 1200)
    }, 1200)
  }).timeout(4000)
})

describe('Test of reset', () => {
  it('should reset countdown after stopped', (done) => {
    timer.start()
    setTimeout(() => {
      timer.reset()
      timer.value.should.equal(INITIAL)
      mockDisplay.innerText.should.equal('00:00:' + INITIAL)
      done()
    }, 1200)
  })
})
