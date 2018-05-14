describe(' radioBill function', function() {

  it('should return the amont of a total calls bill', function() {
    var factroryfun = FactoryFun()
    factroryfun.bill('call');
    assert.equal(factroryfun.getCallTotal(), 2.75);
  });

  it('should return the amont of a total sms bill', function() {
    var factroryfun = FactoryFun()
    factroryfun.bill('sms');
    assert.equal(factroryfun.getSmsTotal(), 0.75);

  });
  it('should return the amont of a total cost of calls and sms bill', function() {
    var factroryfun = FactoryFun()
    factroryfun.bill('call, sms');
    assert.equal( factroryfun.getTotalBill(), 0.00);

});


});
