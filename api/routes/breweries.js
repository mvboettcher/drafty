const NodeHTTPError = require('node-http-error')
const {
  getBreweries,
  getBrewery,
  postBrewery
  //   putBrewery,
  //   deleteBrewery
} = require('../dal')
const bodyParser = require('body-parser')
const { prop, propOr, isEmpty, not, concat, pathOr } = require('ramda')
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
    // console.log(JSON.stringify(new Brewery))
    if (isEmpty(newBrewery)) {
      next(
        new NodeHTTPError(
          400,
          'No valid JSON document was provided in the request body.'
        )
      )
      return
    }
    // console.log("new", newBrewery)
    const missingFields = checkReqFields(reqFields, newBrewery)
    const missingLocationFields = checkReqFields(
      reqLocationFields,
      prop('location', newBrewery)
    )
    const missingHoursFields = checkReqFields(
      reqHoursFields,
      prop('hours', newBrewery)
    )
    if (not(isEmpty(missingFields))) {
      //console.log(missingFieldMsg(missingFields))
      next(new NodeHTTPError(400, missingFieldMsg(missingFields, 'brewery')))
      return
    }
    if (not(isEmpty(missingLocationFields))) {
      //console.log(missingFieldMsg(missingLocationFields))
      next(
        new NodeHTTPError(
          400,
          missingFieldMsg(missingFields, 'brewery location')
        )
      )
      return
    }
    if (not(isEmpty(missingHoursFields))) {
      //console.log(missingFieldMsg(missingHoursFields))
      next(
        new NodeHTTPError(400, missingFieldMsg(missingFields, 'brewery hours'))
      )
      return
    }

    const cleanBrewery = cleanObj(allowedFields, newBrewery)
    //console.log("clean", brewery)
    postBrewery(cleanBrewery)
      .then(result => {
        console.log({ result })
        res.status(201).send(result)
      })
      .catch(err => new NodeHTTPError(err.status, err.message, err))
  })
}

module.exports = breweriesRoutes
