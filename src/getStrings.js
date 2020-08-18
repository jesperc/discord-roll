const getStrings = (str) => {
  try {
    let segments = str.split(' ')
    segments = segments[1].split('-')
    const isInvalidSegment = segments.some(
      (segment) => segment.length <= 0 || !isNaN(segment)
    )
    return !isInvalidSegment ? segments : null
  } catch {}

  return null
}

module.exports = getStrings
