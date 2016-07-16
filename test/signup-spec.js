'use strict';

//name test

describe('name fields', function () {
    var lastname = element(by.model('lastName'));
    var error_message = element(by.css('#nameError'));
    browser.get('http://localhost:8080');

    it('should show error message when name is invalid', function () {
        lastname.sendKeys('name');
        expect(error_message.isPresent()).toBe(false);

        lastname.clear();
        lastname.sendKeys('\t');
        expect(error_message.isPresent()).toBe(true);
    });
});

describe('Validations in form birthday', function () {
    browser.get('http://127.0.0.1:8080/');
    it('should validate for age if under 13', function () {
        var input = element(by.model('birthDate'));
        var age = element(by.css('#bdayAge'));

        input.sendKeys('1/1/2015');
        expect(age.isPresent()).toEqual(true);
        input.clear();
    });
    it('should validate format of date for false input', function () {


        var input = element(by.model('birthDate'));
        var age = element(by.css('#bdayAge'));
        var format = element(by.css('#bdayValid'));

        input.sendKeys('sdf233fk389d');
        expect(format.isPresent()).toEqual(true);
        input.clear();
    });
    it('should show no warnings when date is correct', function () {


        var input = element(by.model('birthDate'));
        var age = element(by.css('#bdayAge'));
        var format = element(by.css('#bdayValid'));

        input.sendKeys('1/1/1985');
        expect(format.isPresent()).toEqual(false);
        expect(age.isPresent()).toEqual(false);
        input.clear();
    });
});

describe('button behavior', function() {
        browser.get('http://localhost:8080');
        it('should disable button when form is invalid', function() {
            var button = element(by.css('#submit'));
            expect(button.isEnabled()).toEqual(false);
        }) 

        it('should display alert message when submit', function() {
            var alert = element(by.className('alert alert-success'));
            var button = element(by.css('#submit'));
            expect(alert.isPresent()).toEqual(false);
            //Please input values that make the form valid here

            //name
            element(by.model('lastName')).sendKeys('name');
            //birthday
            element(by.model('birthDate')).sendKeys('1/1/1985');
            //password
            element(by.id('pw')).sendKeys('1');
            element(by.id('cpw')).sendKeys('1');
            //email
            element(by.id('email')).sendKeys('cat@dog.com');

            button.click();
            expect(alert.isPresent()).toEqual(true);
        })
})


describe('Password Requirements on load', function () {
    browser.get('http://localhost:8080');

    it('should display password field is required on load', function () {
        var pRequire = element(by.css('#pRequire'));
        expect(pRequire.isDisplayed()).toBe(true);
    });

    it('should display confirm field to be required', function () {
        var cRequire = element(by.css('#cRequire'));
        expect(cRequire.isDisplayed()).toBe(true);
    });
});

describe('Password behavior on first entry', function () {
    browser.get('http://localhost:8080');

    var pass = element(by.css('#pw'));
    pass.sendKeys('word');

    it('should not display required for password field', function () {
        var pRequire = element(by.css('#pRequire'));
        expect(pRequire.isDisplayed()).toBe(false);
    });

    it('should display confirm password must match', function () {
        var misMatch = element(by.css('#mis'));
        expect(misMatch.isDisplayed()).toBe(true);
    });
});

describe('Password on matching', function () {
    browser.get('http://localhost:8080');
    it('should not display any errors when both passwords match', function() {
        browser.get('http://localhost:8080');
        var passOne = element(by.id('pw'));
        var passTwo = element(by.id('cpw'));
        var misMatch = element(by.id('mis'));
        
        passOne.sendKeys('kidsister');
        passTwo.sendKeys('kidsister');
        expect(misMatch.isDisplayed()).toBe(false); 
    })

});

describe('Email on validation', function() {
    browser.get('http://localhost:8080');
    var invalid = element(by.id('email'));
    var test = element(by.id('emailError'));
    it('should display error if email is invalid', function() {
        invalid.sendKeys('glorytoarstozyka');
        expect(test.isPresent()).toBe(true);
    })
    it('should not display error if email is valid', function() {
        invalid.sendKeys('cat@dog.com');
        expect(test.isPresent()).toBe(false);
    })
});

describe('Email on touch', function() {
    browser.get('http://localhost:8080');
    var invalid = element(by.id('email'));
    var test = element(by.id('emailTouched'));
    it('should display error if email is touched no input', function() {
        invalid.sendKeys('email');
        invalid.clear();
        invalid.sendKeys('\t');
        expect(test.isPresent()).toBe(true);
    })
    it('should not display error if email is touched with input', function() {
        invalid.sendKeys('cat@dog.com');
        expect(test.isPresent()).toBe(false);
    })
});