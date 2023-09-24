//Declare a global variable called customerName and set it to "bob".
var customerName = "bob";

//Function to uppercase customerName.
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set a global variable called bestCustomer.
function setBestCustomer() {
  bestCustomer = "not bob";
}

//Function to change the value of bestCustomer.
function overwriteBestCustomer() {
  bestCustomer = "maybe bob"; // Change the value to "maybe bob"
}

// Declare a global constant called leastFavoriteCustomer.
const leastFavoriteCustomer = "Alice";

// Attempt to change the constant leastFavoriteCustomer (will result in an error).
function changeLeastFavoriteCustomer() {
  // There will be an error because constants cannot be reassigned.
  leastFavoriteCustomer = "Bob";
}
