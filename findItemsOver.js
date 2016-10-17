

var findItemsOver = function (listOfObjects,threshold) {
  var listOfExpensiveItems = [];
  for (object in listOfObjects) {
    if (listOfObjects[object].price > threshold) {
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
    { itemName : 'Bread', price : 9.50 },
    { itemName : 'Digital Watch' , price: 250 }
];

console.log(findItemsOver20(shoppingList2));
