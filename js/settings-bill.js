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
