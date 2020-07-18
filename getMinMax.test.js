const getMinMax = require('./getMinMax')

describe('getMinMax', () => {
  it('must get min max from string', () => {
    const result = getMinMax('!roll 123-456')
    expect(result.first).toBe(123)
    expect(result.second).toBe(456)
  })

  it('must return null', () => {
    const result = getMinMax('!roll 12a-456')
    expect(result).toBeNull()
  })

  it('must return null', () => {
    const result = getMinMax('!roll')
    expect(result).toBeNull()
  })

  it('must return null', () => {
    const result = getMinMax('!roll -123')
    expect(result).toBeNull()
  })
})
