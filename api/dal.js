const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
const {
  map,
  prop,
  merge,
  split,
  not,
  isEmpty,
  filter,
  propEq,
  propOr,
  contains
} = require('ramda')
const COUCH_HOSTNAME = process.env.COUCH_HOSTNAME
const COUCH_DBNAME = process.env.COUCH_DBNAME
const DB_URL = `${COUCH_HOSTNAME}${COUCH_DBNAME}`

const db = new PouchDB(DB_URL)
const { getAllDocs } = require('./dal-helper')
const pkGen = require('./lib/pkGen')

const getBreweries = query => {
  const [key, value] = not(isEmpty(query)) ? split(':', query) : ['', '']
  return getAllDocs(db, {
    include_docs: true,
    startkey: 'brewery_',
    endkey: 'brewery_\ufff0'
  }).then(
    breweries =>
      isEmpty(query)
        ? breweries
        : filter(
            brewery => contains(value, propOr('', key, brewery)),
            breweries
          )
  )
}

const getBrewery = id => db.get(id)

const postBrewery = brewery => {
  console.log(JSON.stringify(brewery))
  const modifiedBrewery = merge(brewery, {
    _id: pkGen('brewery_', brewery.name),
    type: 'brewery'
  })
  return db.put(modifiedBrewery)
}

const deleteBrewery = brewery => db.remove(brewery)

module.exports = {
  getBreweries,
  getBrewery,
  postBrewery,
  deleteBrewery
}
