
var shoppingList = [
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Bread', price : 19.50 }
];

var printShoppingList = function() {
  for (var item in shoppingList) {
    console.log(shoppingList[item].itemName + " @ " + shoppingList[item].price);
  }
}

printShoppingList();
