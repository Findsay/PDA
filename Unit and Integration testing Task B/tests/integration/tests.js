var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  });

  it('should have working number buttons, multiple numbers clicked', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#number4')).click();
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('245')
  });

  it('should be able to add two numbers together', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number9')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('18');
  });

  it('should be able to subtract two numbers and display the correct total', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number9')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number7')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2');
  });

  it('should be able to divide two numbers and display the correct total', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number8')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4');
  });

  it('should be able to multiply two number and display the correct total', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number4')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('20');
  });

  it('should be able to chain multiple operations together and update the displayed total after the operation click', function(){
    // test chaining * and +
    running_total = element(by.css('#running_total'));
    element(by.css('#number4')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_add')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('20');
    // test  previous total and chaining - and /
    element(by.css('#number9')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number7')).click();
    element(by.css('#operator_divide')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('22');
  });

  it('should be able to display positive numbers', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number4')).click();
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('45');
  });

  it('should be able to display negative numbers', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number4')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-1');
  });

  it('should be able to display decimals', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number5')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number1')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0.5');
  });

  it('should be able to display very large numbers', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number5')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('500000000000');

  });
  // If you divide by zero the calculator currently returns Infinity, i think this should return and ERROR message and clear all past opeartions and have modfified the code accordingly
  it('should be able to return an Error if dividing by 0', function(){
    element(by.css('#number5')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();

    expect(running_total.getAttribute('value')).to.eventually.equal('ERROR');
  });


});
