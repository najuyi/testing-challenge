'use strict';

//name test
describe('name fields', function() {
    var lastname = element(by.model('lastName'));
    var error_message = element(by.cssContainingText('.help-block', 'last name'));
    browser.get('http://localhost:8080');

    it('should show error message when name is invalid', function() {
        lastname.sendKeys('name');
        expect(error_message.isPresent()).toBe(false);
        browser.pause();

        lastname.clear();
        expect(error_message.isPresent()).toBe(true);
    });
});
