// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector(".billTypeText")
var callTotalElem = document.querySelector(".callTotalOne")
var smsTotalElem = document.querySelector(".smsTotalOne")
var totalCostElem = document.querySelector(".totalOne")
//get a reference to the add button
var addToBillBtn = document.querySelector(".addToBillBtn")
//create a variable that will keep track of the total bill

//Factor functions
function FactoryFun() {
  
  var callsTotal = 0;
  var smsTotal = 0;

  //log
  function textBillTotal(billTypeText) {
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.trim();
    // update the correct total
    if (billTypeEntered === "call") {
      callsTotal += 2.75
    } else if (billTypeEntered === "sms") {
      smsTotal += 0.75;
    }
  }

function getCall(){
  return callsTotal.toFixed(2);
}

function getSms() {
  return smsTotal.toFixed(2);
}

function getTotal() {
  return callsTotal + smsTotal;
}

  return {
    bill: textBillTotal,
    getCallTotal: getCall,
    getSmsTotal: getSms,
    getTotalBill: getTotal

  }

}

var factroryfun = FactoryFun()



//DOM
function domFunction() {

factroryfun.bill(billTypeText.value)

  callTotalElem.innerHTML =factroryfun.getCallTotal();
  smsTotalElem.innerHTML = factroryfun.getSmsTotal();
  var totalCost = factroryfun.getTotalBill();
  totalCostElem.innerHTML = totalCost.toFixed(2)


  if (totalCost >= 50) {
    // adding the danger class will make the text red
    totalCostElem.classList.add("danger");
  } else if (totalCost >= 30) {
    totalCostElem.classList.add("warning");
  }
}


//add an event listener for when the add button is pressed
addToBillBtn.addEventListener('click', domFunction);

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
