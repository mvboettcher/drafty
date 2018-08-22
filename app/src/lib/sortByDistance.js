import { getDistanceFromLatLongInMi } from './getDistance'
import { sort, ascend } from 'ramda'

export default (currentPosition, breweries) => {
  const sortFn = brewery => {
    const distance = getDistanceFromLatLongInMi(
      currentPosition.coords.lat,
      currentPosition.coords.lng,
      brewery.location.latitude,
      brewery.location.longitude
    )
    return distance
  }

  return sort(ascend(sortFn), breweries)
}
