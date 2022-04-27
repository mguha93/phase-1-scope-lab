var customerName = 'bob';
const leastFavoriteCustomer = 'doug'

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';     //if const is there then it would've lived in scope of this function. Now it is globally scoped.
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bob'
}