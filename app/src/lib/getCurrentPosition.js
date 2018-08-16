const getClientLocation = cb => {
  let err = {}
  if (navigator.geolocation) {
    const timeoutVal = 10 * 1000 * 1000
    navigator.geolocation.getCurrentPosition(displayPosition, displayError, {
      enableHighAccuracy: true,
      timeout: timeoutVal,
      maximumAge: 0
    })
    if (err.message) return cb(err)
    // cb(null, pos)
  } else {
    err.message = 'not supported'
    return cb(err)
  }

  function displayPosition(position) {
    console.log('displayPosition: ', position)
    cb(null, position)

    //dispatch({ type: SET_LOG_ENTRY_POSITION, payload: { lat: pos.coords.latitude, lng: pos.coords.longitude } })
  }

  function displayError(error) {
    var errors = {
      1: 'Permission denied',
      2: 'Position unavailable',
      3: 'Request timeout'
    }
    err.message = errors[error.code]
    console.log('displayError: ', err)
    cb(err)
  }
}

// const getCurrentPosition2 = cb => {
//   let pos = {}
//   let err = {}
//   if (navigator.geolocation) {
//     const timeoutVal = 10 * 1000 * 1000
//     navigator.geolocation.getCurrentPosition(displayPosition, displayError, {
//       enableHighAccuracy: true,
//       timeout: timeoutVal,
//       maximumAge: 0
//     })
//     if (err.message) return cb(err)
//     cb(null, pos)
//   } else {
//     err.message = 'not supported'
//     return cb(err)
//   }

//   function displayPosition(position) {
//     console.log('displayPosition: ', position)
//     dispatch({
//       type: SET_LOG_ENTRY_POSITION,
//       payload: { lat: pos.coords.latitude, lng: pos.coords.longitude }
//     })
//   }

//   function displayError(error) {
//     var errors = {
//       1: 'Permission denied',
//       2: 'Position unavailable',
//       3: 'Request timeout'
//     }
//     err.message = errors[error.code]
//     console.log('displayError: ', err)
//   }
// }

export default getClientLocation
