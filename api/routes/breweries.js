const NodeHTTPError = require('node-http-error')
const {
  getBreweries,
  getBrewery,
  postBrewery,
  deleteBrewery,
  putBrewery
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
    if (isEmpty(newBrewery)) {
      next(
        new NodeHTTPError(
          400,
          'No valid JSON document was provided in the request body.'
        )
      )
      return
    }
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
      next(new NodeHTTPError(400, missingFieldMsg(missingFields, 'brewery')))
      return
    }
    if (not(isEmpty(missingLocationFields))) {
      next(
        new NodeHTTPError(
          400,
          missingFieldMsg(missingFields, 'brewery location')
        )
      )
      return
    }
    if (not(isEmpty(missingHoursFields))) {
      next(
        new NodeHTTPError(400, missingFieldMsg(missingFields, 'brewery hours'))
      )
      return
    }

    const cleanBrewery = cleanObj(allowedFields, newBrewery)
    postBrewery(cleanBrewery)
      .then(result => {
        console.log({
          result
        })
        res.status(201).send(result)
      })
      .catch(err => new NodeHTTPError(err.status, err.message, err))
  })

  app.delete('/breweries/:id', bodyParser.json(), (req, res, next) => {
    const brewery = propOr({}, 'body', req)
    deleteBrewery(brewery)
      .then(result => res.status(200).send(result))
      .catch(err => next(new NodeHTTPError(err.status, err.message, err)))
  })

  app.put('/breweries/:id', bodyParser.json(), (req, res, next) => {
    const newBrewery = propOr({}, 'body', req)
    if (isEmpty(newBrewery)) {
      next(
        new NodeHTTPError(
          400,
          'No valid JSON document was provided in the request body.'
        )
      )
      return
    }
    const missingFields = checkReqFields(
      concat(['_id', '_rev'], reqFields),
      newBrewery
    )
    if (not(isEmpty(missingFields))) {
      next(new NodeHTTPError(400, missingFieldMsg(missingFields)))
      return
    }
    const cleanBrewery = cleanObj(
      concat(allowedFields, ['_id', '_rev']),
      newBrewery
    )
    putBrewery(cleanBrewery)
      .then(result => {
        console.log({ result })
        res.status(200).send(result)
      })
      .catch(err => new NodeHTTPError(err.status, err.message, err))
  })
}

module.exports = breweriesRoutes
