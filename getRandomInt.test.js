const getRandomInt = require('./getRandomInt')

describe('getRandomInt', () => {
  it('must be in correct interval', () => {
    const result = new Array(100).map(() => getRandomInt(0, 1))
    result.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(0)
      expect(num).toBeLessThan(2)
    })
  })
})
