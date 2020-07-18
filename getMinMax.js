const getMinMax = (str) => {
  try {
    let segments = str.split(' ')
    segments = segments[1].split('-')

    if (!isNaN(segments[0]) && !isNaN(segments[1])) {
      return {
        first: segments[0],
        second: segments[1],
      }
    }
  } catch {}
  return null
}

export default getMinMax
