          // get a reference to the sms or call radio buttons
          var callTotalElems = document.querySelector('.callTotalTwo');
          var smsTotalElems = document.querySelector(".smsTotalTwo")
          var totalCostElems = document.querySelector(".totalTwo")

          //get a reference to the add button
          var radioBillAddBtn = document.querySelector('.radioBillAddBtn')

          //create a variable that will keep track of the total bill
          var billItemTypeRadio = document.querySelector('.billItemTypeRadio')

          var radioBill = FactoryFun();




          radioBillAddBtn.addEventListener('click', checkedRadioBtn);
