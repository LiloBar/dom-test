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
