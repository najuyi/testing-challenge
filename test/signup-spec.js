'use strict';

//name test
describe('name fields', function() {
    var lastname = element(by.model('lastname'));
    var error_message = element(by.cssContainingText('.help-block', 'last name'));
    //valid case
    it('should not show error message when name is valid', function() {

      
    });

    //invalid case
    it('should show error message when name is invalid and touched', function () {
        browser.get('index.html');
    })

});
