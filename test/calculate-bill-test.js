describe('CalculateBill function', function(){

    it('should return the amont of a total calls bill', function(){
        assert.equal( calculateBtnClicked( 'call, call'), 5.50);
    });
    
    it('sholuld return  the total Amount of sms', function(){

        assert.equal( calculateBtnClicked( 'sms, sms'), 1.50);
    });

    it('sholuld return  the total amount of two calls and  sms', function(){

        assert.equal( calculateBtnClicked( 'call, call, sms, sms'), 7.00);
    });
});
