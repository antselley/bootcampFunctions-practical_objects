

var mostProfitableDepartment = function(salesDataInput) {

// Create an array to hold the total Sales for each department
 var mapOfTotalSalesPerDepartment = {};

//Loop through the data. If the department is not yet defined --> add its key to the list wkithin the listOfTotalSalesPerDepartment object. --> Then add the amount in...
for (shop in salesDataInput) {
  var salesEntry = salesDataInput[shop];
      //Check if current department is already on the mapOfTotalSalesPerDepartment, if not --> add it to the map
      if (mapOfTotalSalesPerDepartment[salesEntry.department] === undefined) {
        mapOfTotalSalesPerDepartment[salesEntry.department] = 0;
      }
      // increment the current sales entry in the mapOfTotalSalesPerDepartment
    mapOfTotalSalesPerDepartment[salesEntry.department] += salesEntry.sales ;
    }

// loop through mapOfTotalSalesPerDepartment and return the attribute/key (department) + total sales value...of the maximum...
      var maxDepartmentSales = 0 ;
      var depWithMaxSales = "No Department made any sales over this period" ;
        for (depart in mapOfTotalSalesPerDepartment) {
          if (mapOfTotalSalesPerDepartment[depart] > maxDepartmentSales) {
              maxDepartmentSales = mapOfTotalSalesPerDepartment[depart];
              depWithMaxSales = depart;
            }
        }

      console.log("The department with the most sales for this period was the " + depWithMaxSales + " department who made " + maxDepartmentSales + " worth of sales");
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
    {department : 'hardware', sales : 1200000, day : 'Thursday'},
    {department : 'outdoor', sales : 18007, day : 'Thursday'},
    {department : 'carpentry', sales : 6109, day : 'Thursday'},
    {department : 'hardware', sales : 7005, day : 'Friday'},
    {department : 'outdoor', sales : 12006, day : 'Friday'},
    {department : 'carpentry', sales : 16109, day : 'Friday'}
];

mostProfitableDepartment(salesData);
