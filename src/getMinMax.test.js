const getMinMax = require('./getMinMax')

describe('getMinMax', () => {
  it('must get min max from string', () => {
    const result = getMinMax('!roll 123-456')
    expect(result.min).toBe(123)
    expect(result.max).toBe(456)
  })

  it('must get min max from string if min-max is swapped', () => {
    const result = getMinMax('!roll 456-123')
    expect(result.min).toBe(123)
    expect(result.max).toBe(456)
  })

  it('must return null when invalid string', () => {
    const result = getMinMax('!roll 12a-456')
    expect(result).toBeNull()
  })

  it('must return null when invalid string', () => {
    const result = getMinMax('!roll')
    expect(result).toBeNull()
  })

  it('must return null when invalid string', () => {
    const result = getMinMax('!roll -123')
    expect(result).toBeNull()
  })
})
