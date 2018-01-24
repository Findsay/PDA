var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add', function(){
    calculator.previousTotal = 2;
    calculator.add(5);
    assert.strictEqual(calculator.runningTotal, 7);
  });

  it('shoud be able to subtract', function(){
    calculator.previousTotal = 5;
    calculator.subtract(3);
    assert.strictEqual(calculator.runningTotal, 2);
  });

  it('should be able to multiply', function(){
    calculator.previousTotal = 7;
    calculator.multiply(5);
    assert.strictEqual(calculator.runningTotal, 35);
  });

  it('should be able to divide', function(){
    calculator.previousTotal = 100;
    calculator.divide(25);
    assert.strictEqual(calculator.runningTotal, 4);
  });

  it('should be able to click a number and store value in running total', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    assert.strictEqual(calculator.runningTotal, 123);
  });

  it('should clear previous running total if operator clicked and return new running total', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.numberClick(0);
    assert.strictEqual(calculator.runningTotal, 20);
  })

  it('should be able to click an operator and store as previous operator', function(){
    calculator.operatorClick('+');
    assert.strictEqual(calculator.previousOperator, '+');
  });

  it('should be able to click an operator and store as previoustotal as running total', function(){
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('+');
    assert.strictEqual(calculator.previousTotal, calculator.runningTotal);
  });

  it('should be able to click an operator and if = set previousOperator to null', function(){
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.previousOperator, null);
  });

  it('should be able to click an operator, if no other previous operator, add to running total', function(){
    calculator.numberClick(2);
    calculator.operatorClick('+');
    assert.strictEqual(calculator.runningTotal, 2);
  });

  it('should update the running total by performing the last operation on the running total, if operators are clicked in succession', function(){
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.operatorClick('+');
    assert.strictEqual(calculator.runningTotal, 4);
  });

  it('should be able to click the clear button which clears the running total', function(){
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.clearClick();
    assert.strictEqual(calculator.runningTotal, 0);
  });

  it('should set the previous operator and previous total to null if running total is 0', function(){
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    calculator.clearClick();
    calculator.clearClick();
    assert.strictEqual(calculator.previousOperator, null);
    assert.strictEqual(calculator.previousTotal, null);
  });

  it('should be able to return an Error if dividing by 0 and clear previous operator and previous total', function(){
    calculator.previousTotal = 100;
    calculator.divide(0);
    assert.strictEqual(calculator.runningTotal, "ERROR");
    assert.strictEqual(calculator.previousOperator, null);
    assert.strictEqual(calculator.previousTotal, null);
  });
});
