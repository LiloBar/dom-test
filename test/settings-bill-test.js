describe(' settingsBill function', function() {

  it('should test an amount of a call and return a total', function() {
   var settingsBill = SettingsWithBill();
   settingsBill.setCall(2.75)
   settingsBill.calcBill('call');

  assert.equal(settingsBill.getcall(), 2.75);

 });

  it('should test an amount of an sms and return a total', function() {
    var settingsWithBill = SettingsWithBill();
    settingsWithBill.setSms(0.70)
    settingsWithBill.calcBill('sms');

    assert.equal(settingsWithBill.getsms(), 0.70);

  });


  it('Should return the total amount of sms"s combined with calls and return total', function() {
    var settingsWithBill = SettingsWithBill();
    settingsWithBill.setCall(2.75)
    console.log(settingsWithBill.setCall(2.75))
    settingsWithBill.setSms(0.70)

    settingsWithBill.calcBill('call');
    settingsWithBill.calcBill('call');
    settingsWithBill.calcBill('sms');
    settingsWithBill.calcBill('sms');

    assert.equal(settingsWithBill.getTotal(), 6.90);

  });

  it('should turn orange when reaches the warning amount', function() {
    var settingsWithBill = SettingsWithBill();
    settingsWithBill.setWarningLevel(30)
    settingsWithBill.setCall(20);
    settingsWithBill.setSms(15);
    settingsWithBill.calcBill('call');
    settingsWithBill.calcBill('sms');
    assert.equal(settingsWithBill.getcall(), 20.00);
    assert.equal(settingsWithBill.getsms(), 15.00);
    assert.equal(settingsWithBill.getTotal(), 35.00);
    assert.equal(settingsWithBill.getWaring(), true);


  });

  it('should turn red when it reaches the critacal amount', function() {
    var settingsWithBill = SettingsWithBill();

    settingsWithBill.setCriticalLevel(50)
    settingsWithBill.setCall(20);
    settingsWithBill.setCall(20);
    settingsWithBill.setSms(10);
    settingsWithBill.calcBill('call');
    settingsWithBill.calcBill('call');
    settingsWithBill.calcBill('sms');
    assert.equal(settingsWithBill.getTotal(), 50.00);
    assert.equal(settingsWithBill.getCritical(), true);

  });


  it('should check that if the critical level total is reached and the critical level is upped that the critical level is no longer stopping the total from increasing', function() {
    var settingsWithBill = SettingsWithBill();

    settingsWithBill.setCall(20);
    settingsWithBill.setSms(10);
    settingsWithBill.setCriticalLevel(50)
    settingsWithBill.calcBill('call');
    settingsWithBill.calcBill('call');
    settingsWithBill.calcBill('call');
    settingsWithBill.calcBill('sms');
    assert.equal(settingsWithBill.getTotal(), 70.00);
    assert.equal(settingsWithBill.getCritical(), true);
     settingsWithBill.setCriticalLevel(80);
     assert.equal(settingsWithBill.getCritical(), false);
    settingsWithBill.calcBill('sms');
    assert.equal(settingsWithBill.getTotal(), 80.00);
  });

});
