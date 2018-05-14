// get a reference to the sms or call radio buttons
var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings")

// get refences to all the settings fields
var callCostSettings = document.querySelector('.callCostSetting');
var smsCostSettings = document.querySelector(".smsCostSetting")
var warningLevelSettings = document.querySelector(".warningLevelSetting")
var criticalLevelSetting = document.querySelector(".criticalLevelSetting")
//get a reference to the add button
var settingsAddBtn = document.querySelector(".settingsAddBtn")


//get a reference to the 'Update settings' button
var updateSettings = document.querySelector(".updateSettings")
// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.
var callTotalSettings = document.querySelector('.callTotalSettings');
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings");

callTotalSettings.innerHTML = "0.00";
smsTotalSettings.innerHTML = "0.00";
totalSettings.innerHTML = "0.00";

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



function update() {

  settingsWithBill.setCall(callCostSettings.value);

  settingsWithBill.setSms(smsCostSettings.value);
  warningLevel = parseFloat(warningLevelSettings.value);

  settingsWithBill.setWarningLevel(warningLevel);
  criticalevel = parseFloat(criticalLevelSetting.value);
  settingsWithBill.setCriticalLevel(criticalevel);

}


function BillSettings() {

  let tot = parseFloat(totalSettings.innerHTML);

 if (criticalevel <= tot) {
  return;
 }

  var settingsRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (settingsRadioBtn) {
    var settingsItemType = settingsRadioBtn.value
    settingsWithBill.calcBill(settingsItemType);
    console.log(settingsWithBill.getcall());
    callTotalSettings.innerHTML = settingsWithBill.getcall();
    smsTotalSettings.innerHTML = settingsWithBill.getsms();
    var totalamount = settingsWithBill.getTotal();
    totalSettings.innerHTML = totalamount;



    if (totalamount >= criticalevel) {
      // adding the danger class will make the text red
      totalSettings.classList.add("danger");
    } else if (totalamount >= warningLevel) {
      totalSettings.classList.add("warning");

    }
    if (totalamount < criticalevel) {
      // adding the danger class will make the text red
      totalSettings.classList.remove("danger");
    } else if (totalamount < warningLevel) {
      totalSettings.classList.remove("warning");

    }
    if (updateSettings < criticalevel) {
      // adding the danger class will make the text red
      totalSettings.classList.remove("danger");
    } else if (totalamount < warningLevel) {
      totalSettings.classList.remove("warning");

    }
  }
}




updateSettings.addEventListener('click', update);
settingsAddBtn.addEventListener('click', BillSettings);
