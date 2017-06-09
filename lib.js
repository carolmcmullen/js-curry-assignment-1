'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  listing =>
    name =>
      name === listing.name
        ? listing.price
        : 0

/**
 * transform carts into an array of { customer, total }
 *an array that has customer's names and total

const calculateTotals =
  listings =>
    carts => ({
      (carts: cart[], init: cart) => cart
    })
*/
const calculateTotals = function (listings) {
  (listings, init) =>
    reduce(listings.price, (x, y) => x + y, init)
}

module.exports = {
  listing,
  cart,
  calculateTotals
}
