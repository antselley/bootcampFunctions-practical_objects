
const assert = require('assert');

var findItemsOver = function (listOfObjects,threshold) {
  var listOfExpensiveItems = [];
  for (object in listOfObjects) {
    if (listOfObjects[object].price > threshold) {
      listOfExpensiveItems.push(listOfObjects[object].itemName);
    }
  }
  return listOfExpensiveItems;
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
    { itemName : 'Bread', price : 9.50 },
    { itemName : 'Digital Watch' , price: 250 }
];

assert.deepEqual(findItemsOver(shoppingList2,10), ["Bread","Cheese","Digital Watch"]);
