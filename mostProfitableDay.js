
var mostProfitableDay = function(salesDataInput) {
  mapOfTotalSalesPerDay = {};

//loop through the salesDataInput - if the day is not yet in the mapOfTotalSalesPerDay --> add it to the mapOfTotalSalesPerDay (initialise to 0)
  for (shop in salesDataInput) {
    var currentShop = salesDataInput[shop];
      if (mapOfTotalSalesPerDay[currentShop.day] === undefined) {
        mapOfTotalSalesPerDay[currentShop.day] = 0
      }
    mapOfTotalSalesPerDay[currentShop.day] += currentShop.sales ; // Loop through the map & add increment by new amounts...
    }

  // Initialize a maximum sales per day variable and update it to end up as the maximum...(using a loop)
    var maxSalesPerDay = 0 ;
    var dayOnWhichMaxSales = "No sales were made during this perdio" ;
    for (day in mapOfTotalSalesPerDay) {
      if (mapOfTotalSalesPerDay[day] > maxSalesPerDay) {
        maxSalesPerDay = mapOfTotalSalesPerDay[day] ;
        dayOnWhichMaxSales = day;
      }
    }
    console.log("The most sales were made on " + dayOnWhichMaxSales + " on which R" + maxSalesPerDay + " of sales were made");
}


var salesData = [
    {department : 'hardware', sales : 4500, day : 'Monday'},
    {department : 'outdoor', sales : 1500, day : 'Monday'},
    {department : 'carpentry', sales : 5500, day : 'Monday'},
    {department : 'hardware', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'hardware', sales : 1500, day : 'Wednesday'},
    {department : 'outdoor', sales : 8507, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
    {department : 'hardware', sales : 12000, day : 'Thursday'},
    {department : 'outdoor', sales : 1007, day : 'Thursday'},
    {department : 'carpentry', sales : 6109, day : 'Thursday'},
    {department : 'hardware', sales : 7005, day : 'Friday'},
    {department : 'outdoor', sales : 12006, day : 'Friday'},
    {department : 'carpentry', sales : 16109, day : 'Friday'},
];

mostProfitableDay(salesData) ;
