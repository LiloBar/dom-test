          // get a reference to the sms or call radio buttons
          var callTotalElems = document.querySelector('.callTotalTwo');
          var smsTotalElems = document.querySelector(".smsTotalTwo")
          var totalCostElems = document.querySelector(".totalTwo")

          //get a reference to the add button
          var radioBillAddBtn = document.querySelector('.radioBillAddBtn')

          //create a variable that will keep track of the total bill
          var billItemTypeRadio = document.querySelector('.billItemTypeRadio')

          var radioBill = FactoryFun()


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

          radioBillAddBtn.addEventListener('click', checkedRadioBtn);
