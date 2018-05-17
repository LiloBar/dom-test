describe(' settingsBill function', function() {

  it('should test an amount of a call and return a total', function() {
    var settingsWithBill = SettingsWithBill();
    settingsWithBill.setCall('2.75')
    settingsWithBill.calcBill('call');

    assert.equal(settingsWithBill.getcall(), 2.75);
  });

  it('should test an amount of an sms and return a total', function() {
    var settingsWithBill = SettingsWithBill();
    settingsWithBill.setSms('0.70')
    settingsWithBill.calcBill('sms');

    assert.equal(settingsWithBill.getsms(), 0.70);

  });


  it('Should return the total amount of sms"s combined with calls and return total', function() {
    var settingsWithBill = SettingsWithBill();
    settingsWithBill.setCall('2.75')
    settingsWithBill.setSms('0.70')

    settingsWithBill.calcBill('call');
    settingsWithBill.calcBill('call');
    settingsWithBill.calcBill('sms');
    settingsWithBill.calcBill('sms');

    assert.equal(settingsWithBill.getTotal(), 6.90);

  });

  it('should turn orange when reaches the warning amount', function() {
    var settingsWithBill = SettingsWithBill();
    settingsWithBill.setWarningLevel('')
    settingsWithBill.calcBill('');

    assert.equal(settingsWithBill.getTotal(), 0.00);

  });

  it('should turn red when it reaches the critacal amount', function() {
    var settingsWithBill = SettingsWithBill();
    settingsWithBill.setCriticalLevel('')
    settingsWithBill.calcBill('');

    assert.equal(settingsWithBill.getTotal(), 0.00);

  });

});
