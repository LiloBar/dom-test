//get a reference to the calculate button
var calculate = document.querySelector(".calculateBtn");
console.log(calculate);
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
var totalCostElement = document.querySelector(".billTotal");

//get a reference to the billString
var billString = document.querySelector(".billString");
//create the function that will be called when the calculate button is pressed

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
 //get a reference to the calculate button
 calculate.addEventListener('click', myColor);
