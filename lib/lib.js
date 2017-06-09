'use strict';

const listing = (name, price) => ({
  name,
  price
});

const cart = (customer, ...items) => ({
  customer,
  items
});

const listedPrice = listing => name => name === listing.name ? listing.price : 0;

/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals = listings => carts => {
  let result = [];
  for (var index = 0; index < carts.length; index++) {
    result.push(processCart(carts[index], listings));
  }
  return result;
};

const processCart = (cart, listings) => {
  let customer = cart.customer;
  let total = 0;
  cart.items.forEach(cartItem => {
    listings.forEach(listingItem => {
      if (listingItem.name === cartItem) {
        total = total + listingItem.price;
      }
    }
    //for (var i = 0; i < listings.length; i++) {

    //}
    );
  });
  return { customer, total };
};

const getSum = function (total, num) {
  return total + getPrice(num, this);
};

//console.log('listings' + listings)


module.exports = {
  listing,
  cart,
  calculateTotals
};