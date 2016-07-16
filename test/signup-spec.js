'use strict';

//name test

describe('name fields', function() {
    var lastname = element(by.model('lastName'));
    var error_message = element(by.css('#nameError'));
    browser.get('http://localhost:8080');

    it('should show error message when name is invalid', function() {
        lastname.sendKeys('name');
        expect(error_message.isPresent()).toBe(false);

        lastname.clear();
        lastname.sendKeys('\t');
        expect(error_message.isPresent()).toBe(true);
    });
});

describe('Validations in form birthday', function(){
    browser.get('http://127.0.0.1:8080/');
    it('should validate for age if under 13', function(){
        var input = element(by.model('birthDate'));
        var age = element(by.css('#bdayAge'));
    
        input.sendKeys('1/1/2015');
        expect(age.isPresent()).toEqual(true);
        input.clear();
    });
    it('should validate format of date for false input', function(){
        
        
        var input = element(by.model('birthDate'));
        var age = element(by.css('#bdayAge'));
        var format = element(by.css('#bdayValid'));
    
        input.sendKeys('sdf233fk389d');
        expect(format.isPresent()).toEqual(true);
        input.clear();
    });
    it('should show no warnings when date is correct', function(){
        
        
        var input = element(by.model('birthDate'));
        var age = element(by.css('#bdayAge'));
        var format = element(by.css('#bdayValid'));
    
        input.sendKeys('1/1/1985');
        expect(format.isPresent()).toEqual(false);
        expect(age.isPresent()).toEqual(false);
        input.clear();
    });
    
    
})
