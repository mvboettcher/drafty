const NodeHTTPError = require('node-http-error')
const {
  getBreweries,
  getBrewery,
  postBrewery
  //   putResource,
  //   deleteResource
} = require('../dal')
const bodyParser = require('body-parser')
const { propOr, isEmpty, not, concat, pathOr } = require('ramda')
const checkReqFields = require('../lib/checkRequiredFields')
const missingFieldMsg = require('../lib/missingFieldMsg')
const cleanObj = require('../lib/cleanObj')

const reqFields = ['name', 'phone', 'rating', 'website', 'hours', 'location']

const reqHoursFields = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

const reqLocationFields = ['address', 'longitude', 'latitude']

const allowedFields = concat(['coupons'], reqFields)

const breweriesRoutes = app => {
  app.get('/breweries', (req, res, next) => {
    const query = pathOr('', ['query', 'filter'], req)
    getBreweries(query)
      .then(breweries => res.send(breweries))
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })

  app.get('/breweries/:id', (req, res, next) => {
    const breweryId = pathOr('', ['params', 'id'], req)
    getBrewery(breweryId)
      .then(brewery => res.status(200).send(brewery))
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })

  app.post('/breweries', bodyParser.json(), (req, res, next) => {
    const newBrewery = propOr({}, 'body', req)
    // console.log(JSON.stringify(newResource))
    if (isEmpty(newBrewery)) {
      next(
        new NodeHTTPError(
          400,
          'No valid JSON document was provided in the request body.'
        )
      )
      return
    }
    // console.log("new", newResource)
    const missingFields = checkReqFields(reqFields, newBrewery)
    const missingLocationFields = checkReqFields(
      reqLocationFields,
      newBrewery.location
    )
    const missingHoursFields = checkReqFields(reqHoursFields, newBrewery.hours)
    //console.log(missingFields)
    //console.log(not(isEmpty(missingFields)))
    if (not(isEmpty(missingFields))) {
      //console.log(missingFieldMsg(missingFields))
      next(new NodeHTTPError(400, missingFieldMsg(missingFields, 'brewery')))
      return
    }
    if (not(isEmpty(missingLocationFields))) {
      //console.log(missingFieldMsg(missingFields))
      next(
        new NodeHTTPError(
          400,
          missingFieldMsg(missingFields, 'brewery location')
        )
      )
      return
    }
    if (not(isEmpty(missingHoursFields))) {
      //console.log(missingFieldMsg(missingFields))
      next(
        new NodeHTTPError(400, missingFieldMsg(missingFields, 'brewery hours'))
      )
      return
    }

    const cleanResource = cleanObj(allowedFields, newBrewery)
    //console.log("clean", cleanResource)
    postBrewery(cleanResource)
      .then(result => {
        console.log({ result })
        res.status(201).send(result)
      })
      .catch(err => new NodeHTTPError(err.status, err.message, err))
  })

  // app.put("/resources/:id", bodyParser.json(), (req, res, next) => {
  //     const newResource = propOr({}, "body", req)
  //     // console.log(JSON.stringify(newResource))
  //     if (isEmpty(newResource)) {
  //         next(
  //             new NodeHTTPError(
  //                 400,
  //                 "No valid JSON document was provided in the request body."
  //             )
  //         )
  //         return
  //     }
  //     // console.log("new", newResource)
  //     const missingFields = checkReqFields(
  //         concat(["_id", "_rev"], reqFields),
  //         newResource
  //     )
  //     //console.log(missingFields)
  //     //console.log(not(isEmpty(missingFields)))
  //     if (not(isEmpty(missingFields))) {
  //         //console.log(missingFieldMsg(missingFields))
  //         next(new NodeHTTPError(400, missingFieldMsg(missingFields)))
  //         return
  //     }
  //     const cleanResource = cleanObj(
  //         concat(allowedFields, ["_id", "_rev"]),
  //         newResource
  //     )
  //     //console.log("clean", cleanResource)
  //     putResource(cleanResource)
  //         .then(result => {
  //             console.log({ result })
  //             res.status(200).send(result)
  //         })
  //         .catch(err => new NodeHTTPError(err.status, err.message, err))
  // })

  // app.delete("/resources/:id", bodyParser.json(), (req, res, next) => {
  //     const resource = propOr({}, "body", req)
  //     deleteResource(resource)
  //         .then(result => res.status(200).send(result))
  //         .catch(err => next(new NodeHTTPError(err.status, err.message, err)))
  // })
}

module.exports = breweriesRoutes
