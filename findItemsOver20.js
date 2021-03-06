
const assert = require('assert');

var findItemsOver20 = function (listOfObjects) {
  var listOfOverR20 = [];
  for (object in listOfObjects) {
    if (listOfObjects[object].price > 20) {
      listOfOverR20.push(listOfObjects[object].itemName);
    }
  }
  return listOfOverR20;
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


assert.equal(findItemsOver20(shoppingList2), "Cheese" );
