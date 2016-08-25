import Timer from '../www/Timer'
import should from 'should'

should()

const mockAttributes = { class:'' }
const mockDisplay = {
  getAttribute: (attr) => { return mockAttributes[attr] ? mockAttributes[attr] : '' },
  setAttribute: (attr, value) => { mockAttributes[attr] = value },
}
const INITIAL_VALUE = 10
const CLASS_COUNTING = 'started'
const timer = new Timer(INITIAL_VALUE, CLASS_COUNTING , mockDisplay)


beforeEach(() => {
  mockAttributes.class = ''
  mockDisplay.innerText = ''
})

describe('Test of start', () => {
  it('should start countdown', (done) => {
    timer.start()
    setTimeout(() => {
      timer.value.should.be.below(INITIAL_VALUE)
      mockAttributes.class.should.equal(CLASS_COUNTING)
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
      setTimeout(() => {
        timer.value.should.equal(valueAtStopped)
        mockAttributes.class.should.not.equal(CLASS_COUNTING)
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
      setTimeout(() => {
        timer.start()
        setTimeout(() => {
          timer.value.should.be.below(valueAtStopped)
          mockAttributes.class.should.equal(CLASS_COUNTING)
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
      timer.value.should.equal(INITIAL_VALUE)
      done()
    }, 1200)
  })
})
