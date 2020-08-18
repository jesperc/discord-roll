const getStrings = require('./getStrings')

describe('getStrings', () => {
  it('must return a list of strings', () => {
    const result = getStrings('!roll hej-olle-johan')
    expect(result.length).toBe(3)
    expect(result[0]).toBe('hej')
    expect(result[1]).toBe('olle')
    expect(result[2]).toBe('johan')
  })

  it('must return null when numbers', () => {
    const result = getStrings('!roll 123-456')
    expect(result).toBeNull()
  })

  it('must return null when mixed', () => {
    const result = getStrings('!roll johan-123-per')
    expect(result).toBeNull()
  })
})
