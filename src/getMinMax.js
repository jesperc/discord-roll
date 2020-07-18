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
      return {
        first: parseInt(segments[0]),
        second: parseInt(segments[1]),
      }
    }
  } catch {}
  return null
}

module.exports = getMinMax
