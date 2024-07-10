var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob'; 
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'initial customer';

function changeLeastFavoriteCustomer() {
  // This will throw an error because constants cannot be reassigned
  leastFavoriteCustomer = 'new customer';
}
