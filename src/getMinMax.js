const getMinMax = (str) => {
  try {
    let segments = str.split(' ')
    segments = segments[1].split('-')
    if (
      !isNaN(segments[0]) &&
      segments[0].length > 0 &&
      !isNaN(segments[1]) &&
      segments[1].length > 0
    ) {
      const number1 = parseInt(segments[0])
      const number2 = parseInt(segments[1])
      return number1 <= number2
        ? {
            min: number1,
            max: number2,
          }
        : {
            min: number2,
            max: number1,
          }
    }
  } catch (error) {
    console.error(error)
  }

  return null
}

module.exports = getMinMax
