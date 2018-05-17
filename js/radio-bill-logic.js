function checkedRadioBtn() {
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn) {
    var billItemType = checkedRadioBtn.value
    radioBill.bill(billItemType);
  }



  callTotalElems.innerHTML =radioBill.getCallTotal();
  smsTotalElems.innerHTML = radioBill.getSmsTotal();
  var totalCosts = radioBill.getTotalBill();
  totalCostElems.innerHTML = totalCosts.toFixed(2)

  //color the total based on the criteria
  if (totalCosts >= 50) {
    // adding the danger class will make the text red
    totalCostElems.classList.add("danger");
  } else if (totalCosts >= 30) {
    totalCostElems.classList.add("warning");
  }
}
