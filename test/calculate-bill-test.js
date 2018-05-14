describe('CalculateBill function', function(){

    it('should return the amont of a total calls bill', function(){
        assert.equal( calculateBtnClicked( 'call'), 2.75);
    });
    it('sholuld return  the total Amount of sms', function(){

        assert.equal( calculateBtnClicked( 'sms'), 0.75);
    });

    it('sholuld return  the total amount of two calls and  sms', function(){

        assert.equal( calculateBtnClicked( 'call' + 'call' + 'sms' + 'sms'), 0.00);
    });
});
