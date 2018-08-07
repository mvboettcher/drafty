const { compose, join, concat } = require('ramda')

module.exports = (fields, objString) =>
  compose(
    concat(
      `You are missing the following fields from the request body in your ${objString} object: `
    ),
    join(',')
  )(fields)
