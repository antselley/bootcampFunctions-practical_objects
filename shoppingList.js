
const assert = require('assert');

var shoppingList = function(shoppingListProvided) {
  totalCost = 0;
  for (item in shoppingListProvided) {
    totalCost += shoppingListProvided[item].price ;
  }
  return totalCost;
}


var shoppingList1 = [
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 19.50 }
];

var shoppingList2 = [
    { itemName : 'Apples', price : 7.50 },
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 23.00 },
    { itemName : 'Bread', price : 9.50 }
];

shoppingList(shoppingList1) ;
shoppingList(shoppingList2) ;

assert.equal(shoppingList(shoppingList1), 37.5);
assert.equal(shoppingList(shoppingList2), 58);
