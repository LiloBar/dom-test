//get a reference to the calculate button
var calculate = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
var totalCostElement = document.querySelector(".billTotal");

//get a reference to the billString
var billString = document.querySelector(".billString");



//create the function that will be called when the calculate button is pressed
function calculateBtnClicked(billString) {
  //split the string
  var billItems = billString.split(",");
  // a variable for the total phone bill.
  var billTotal = 0;

  //loop over all the bill items
  for (var i = 0; i < billItems.length; i++) {
    var billItem = billItems[i].trim();
    if (billItem === "call") {
      billTotal += 2.75;
    } else if (billItem === "sms") {
      billTotal += 0.75;
    }
    // var totalCost = callsTotal + smsTotal;
    // //round to two decimals
    // var roundedBillTotal = billTotal.toFixed(2);

    //color the total based on the criteria
  }
  return billTotal.toFixed(2);

}


function myColor() {
  var roundedTotal = calculateBtnClicked(billString.value);
  totalCostElement.innerHTML = roundedTotal
    //billTotalElement.innerHTML = roundedBillTotal;


  // get the string entered in the textArea

  if (roundedTotal >= 30) {
    // adding the danger class will make the text red
    totalCostElement.classList.add("danger");
  }
  if (roundedTotal >= 20) {
    totalCostElement.classList.add("warning");
  }
  if (roundedTotal < 30) {
    // adding the danger class will make the text red
    totalCostElement.classList.remove("danger");
  }
  if (roundedTotal < 20) {
    // adding the danger class will make the text red
    totalCostElement.classList.remove("warning");
  }

}

//link the function to a click event on the calculate button
calculate.addEventListener('click', myColor); //get a reference to the calculate button
