function SettingsWithBill() {

  var callamount = 0;
  var smsamount = 0;
  var totalamount = 0;
  var callcost = 0;
  var smscost = 0;
  var warningLevel = 0;
  var criticalevel = 0;


  //logic function
  function settingsBill(billText) {

    var settingsItemType = billText.trim();
    console.log(settingsItemType);
    if (settingsItemType === "call") {
      callamount += callcost;
    }
    if (totalamount > criticalevel) {
      var diff = totalamount - criticalevel;
      callamount -= diff;
    } else if (settingsItemType === "sms") {
      smsamount += smscost;

    }

    if (totalamount > criticalevel) {
      var diff = totalamount - criticalevel;
      smsamount -= diff;
    }

  }

  //setters

  function setCostcall(value) {
    callcost = parseFloat(value);

  }

  function setCostsms(value) {
    smscost = parseFloat(value);

  }

  function setWarning(value) {
    warningLevel = value;

  }

  function setCritical(value) {
    criticalevel = value;

  }

  //getters

  function TotalSettings() {

    return (callamount + smsamount).toFixed(2)

  }

  function getCostCall() {
    return callamount.toFixed(2);
  }

  function getCostSms() {
    return smsamount.toFixed(2);
  }



  function getWarningLevel() {
    return warningLevel;
  }

  function getCriticalevel() {
    return criticalevel;
  }


  return {
    calcBill: settingsBill,
    setCall: setCostcall,
    setSms: setCostsms,
    setWarningLevel: setWarning,
    setCriticalLevel: setCritical,
    getsms: getCostSms,
    getcall: getCostCall,
    getTotal: TotalSettings

  }
}

var settingsWithBill = SettingsWithBill();
